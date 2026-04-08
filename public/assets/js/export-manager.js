// Export Manager - Handles PPT, PDF, and Clipboard exports
// Supports both Working Document and Executive Clean modes

class ExportManager {
    constructor() {
        this.mode = 'working'; // 'working' or 'executive'
        this.plan = null;
    }

    // Set the plan to export
    setPlan(plan) {
        this.plan = plan;
        return this;
    }

    // Set export mode
    setMode(mode) {
        this.mode = mode;
        return this;
    }

    // Export to PowerPoint
    async exportToPowerPoint() {
        if (!this.plan) {
            throw new Error('No plan set. Call setPlan() first.');
        }

        // Check if pptxgen is loaded
        if (typeof PptxGenJS === 'undefined') {
            console.error('PptxGenJS library not loaded. Please include it in your HTML.');
            alert('PowerPoint export requires the PptxGenJS library. Falling back to PDF export.');
            return this.exportToPDF();
        }

        const pptx = new PptxGenJS();

        // Set presentation properties
        pptx.author = 'ABM Intelligence Platform';
        pptx.company = 'TP';
        pptx.subject = `90-Day ABX Plan - ${this.plan.metadata.verticalName}`;
        pptx.title = `${this.plan.metadata.verticalName} ABX Playbook`;

        // Define brand colors
        const colors = {
            primary: 'DA7036',
            dark: '1A1A2E',
            accent: '0F3460',
            text: 'E8E8E8',
            lightText: 'B8B8B8'
        };

        // Slide 1: Title Slide
        const titleSlide = pptx.addSlide();
        titleSlide.background = { color: colors.dark };
        titleSlide.addText(`${this.plan.metadata.verticalIcon} ${this.plan.metadata.verticalName}`, {
            x: 0.5,
            y: 1.5,
            w: 9,
            h: 1.5,
            fontSize: 54,
            bold: true,
            color: colors.primary,
            align: 'center'
        });
        titleSlide.addText('90-Day ABX Execution Playbook', {
            x: 0.5,
            y: 3,
            w: 9,
            h: 0.8,
            fontSize: 32,
            color: colors.text,
            align: 'center'
        });
        titleSlide.addText(`Generated: ${new Date(this.plan.metadata.generatedDate).toLocaleDateString()}`, {
            x: 0.5,
            y: 4,
            w: 9,
            h: 0.5,
            fontSize: 18,
            color: colors.lightText,
            align: 'center',
            italic: true
        });

        // Slide 2: Executive Summary
        const summarySlide = pptx.addSlide();
        summarySlide.background = { color: colors.dark };
        this.addSlideHeader(summarySlide, 'Executive Summary', colors);

        const summaryPoints = [
            `Vertical: ${this.plan.metadata.verticalName}`,
            `Tier: ${this.plan.metadata.tier}`,
            `Target CX Budget: ${this.plan.metadata.cxBudget}`,
            `Avg Deal Size: ${this.plan.metadata.avgDealSize}`,
            `Sales Cycle: ${this.plan.metadata.salesCycle}`,
            `Target Personas: ${this.plan.metadata.selectedPersonas.join(', ')}`
        ];

        summarySlide.addText(summaryPoints, {
            x: 0.75,
            y: 1.5,
            w: 8.5,
            h: 4,
            fontSize: 20,
            color: colors.text,
            bullet: { type: 'number' }
        });

        // Slide 3: Phase 1 Overview
        this.addPhaseOverviewSlide(pptx, this.plan.phase1, 'Phase 1', colors);

        // Slides 4-7: Phase 1 Weekly Details
        this.addWeekDetailSlide(pptx, this.plan.phase1.week1, 'Week 1', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase1.week2, 'Week 2', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase1.week3, 'Week 3', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase1.week4, 'Week 4', colors);

        // Slide 8: Phase 2 Overview
        this.addPhaseOverviewSlide(pptx, this.plan.phase2, 'Phase 2', colors);

        // Slides 9-11: Phase 2 Weekly Details
        this.addWeekDetailSlide(pptx, this.plan.phase2.week5, 'Week 5', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase2.week6, 'Week 6', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase2.week7, 'Week 7', colors);

        // Slide 12: Phase 3 Overview
        this.addPhaseOverviewSlide(pptx, this.plan.phase3, 'Phase 3', colors);

        // Slides 13-15: Phase 3 Weekly Details
        this.addWeekDetailSlide(pptx, this.plan.phase3.week9, 'Week 9', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase3.week10, 'Week 10', colors);
        this.addWeekDetailSlide(pptx, this.plan.phase3.week11, 'Week 11', colors);

        // Slide 16: Success Metrics
        this.addSuccessMetricsSlide(pptx, this.plan.successMetrics, colors);

        // Slide 17: Demandbase Orchestration
        this.addDemandbaseSlide(pptx, this.plan.demandbaseOrchestration, colors);

        // Save the presentation
        const fileName = `90Day_ABX_Plan_${this.plan.metadata.verticalName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pptx`;
        await pptx.writeFile({ fileName });

        return { success: true, fileName };
    }

    // Export to PDF
    exportToPDF() {
        if (!this.plan) {
            throw new Error('No plan set. Call setPlan() first.');
        }

        // Use browser's print functionality with custom CSS
        const printWindow = window.open('', '_blank');
        const htmlContent = this.generatePrintHTML();

        printWindow.document.write(htmlContent);
        printWindow.document.close();

        // Trigger print dialog after content loads
        printWindow.onload = function() {
            printWindow.print();
        };

        return { success: true, message: 'Print dialog opened. Save as PDF from print dialog.' };
    }

    // Export to Clipboard
    exportToClipboard() {
        if (!this.plan) {
            throw new Error('No plan set. Call setPlan() first.');
        }

        const textContent = this.generateTextContent();

        navigator.clipboard.writeText(textContent).then(() => {
            return { success: true, message: 'Plan copied to clipboard!' };
        }).catch(err => {
            console.error('Failed to copy to clipboard:', err);
            return { success: false, message: 'Failed to copy to clipboard' };
        });
    }

    // Helper: Add slide header
    addSlideHeader(slide, title, colors) {
        slide.addText(title, {
            x: 0.5,
            y: 0.5,
            w: 9,
            h: 0.6,
            fontSize: 36,
            bold: true,
            color: colors.primary
        });
        slide.addShape('line', {
            x: 0.5,
            y: 1.2,
            w: 9,
            h: 0,
            line: { color: colors.primary, width: 2 }
        });
    }

    // Helper: Add phase overview slide
    addPhaseOverviewSlide(pptx, phase, phaseName, colors) {
        const slide = pptx.addSlide();
        slide.background = { color: colors.dark };
        this.addSlideHeader(slide, `${phaseName}: ${phase.title}`, colors);

        slide.addText(phase.subtitle, {
            x: 0.75,
            y: 1.5,
            w: 8.5,
            h: 0.5,
            fontSize: 24,
            color: colors.accent,
            italic: true
        });

        slide.addText(`Duration: ${phase.duration}`, {
            x: 0.75,
            y: 2.1,
            w: 8.5,
            h: 0.4,
            fontSize: 20,
            color: colors.text
        });

        // Add high-level week summaries
        const weeks = Object.keys(phase).filter(key => key.startsWith('week'));
        const weekSummaries = weeks.map(weekKey => {
            const week = phase[weekKey];
            return `${weekKey.replace('week', 'Week ')}: ${week.title}`;
        });

        slide.addText(weekSummaries, {
            x: 0.75,
            y: 2.8,
            w: 8.5,
            h: 3,
            fontSize: 18,
            color: colors.text,
            bullet: true
        });
    }

    // Helper: Add week detail slide
    addWeekDetailSlide(pptx, week, weekLabel, colors) {
        const slide = pptx.addSlide();
        slide.background = { color: colors.dark };
        this.addSlideHeader(slide, `${weekLabel}: ${week.title}`, colors);

        let yPos = 1.8;
        week.days.forEach((day, index) => {
            if (index > 1) return; // Limit to 2 days per slide for readability

            slide.addText(`${day.day}: ${day.title}`, {
                x: 0.75,
                y: yPos,
                w: 8.5,
                h: 0.4,
                fontSize: 20,
                bold: true,
                color: colors.primary
            });

            yPos += 0.5;

            // Add first 3 activities
            const activities = day.activities.slice(0, 3).map(act => {
                if (typeof act === 'string') return act;
                return act;
            });

            slide.addText(activities, {
                x: 1,
                y: yPos,
                w: 8.5,
                h: 1.2,
                fontSize: 14,
                color: colors.text,
                bullet: { type: 'bullet' }
            });

            yPos += 1.5;

            // Add framework reference if in working mode
            if (this.mode === 'working' && day.framework) {
                slide.addText(`Framework: ${day.framework}`, {
                    x: 1,
                    y: yPos,
                    w: 8,
                    h: 0.3,
                    fontSize: 12,
                    color: colors.lightText,
                    italic: true
                });
            }

            yPos += 0.5;
        });
    }

    // Helper: Add success metrics slide
    addSuccessMetricsSlide(pptx, metrics, colors) {
        const slide = pptx.addSlide();
        slide.background = { color: colors.dark };
        this.addSlideHeader(slide, metrics.title, colors);

        let yPos = 1.8;
        metrics.categories.forEach((category, index) => {
            if (index > 1) return; // Limit for slide space

            slide.addText(category.name, {
                x: 0.75,
                y: yPos,
                w: 8.5,
                h: 0.4,
                fontSize: 18,
                bold: true,
                color: colors.primary
            });

            yPos += 0.5;

            const kpiText = category.kpis.slice(0, 3).map(kpi =>
                `${kpi.metric}: ${kpi.target}`
            );

            slide.addText(kpiText, {
                x: 1,
                y: yPos,
                w: 8.5,
                h: 1,
                fontSize: 14,
                color: colors.text,
                bullet: true
            });

            yPos += 1.3;
        });
    }

    // Helper: Add Demandbase orchestration slide
    addDemandbaseSlide(pptx, demandbase, colors) {
        const slide = pptx.addSlide();
        slide.background = { color: colors.dark };
        this.addSlideHeader(slide, demandbase.title, colors);

        // Add scoring thresholds
        const thresholds = [
            `Urgent (90-100): ${demandbase.scoringThresholds.urgent.action}`,
            `Immediate (70-89): ${demandbase.scoringThresholds.immediate.action}`,
            `Scheduled (50-69): ${demandbase.scoringThresholds.scheduled.action}`
        ];

        slide.addText(thresholds, {
            x: 0.75,
            y: 1.8,
            w: 8.5,
            h: 2,
            fontSize: 14,
            color: colors.text,
            bullet: true
        });

        // Add journey stages
        slide.addText('Journey Stage Progression:', {
            x: 0.75,
            y: 4,
            w: 8.5,
            h: 0.4,
            fontSize: 16,
            bold: true,
            color: colors.primary
        });

        const stages = [
            `Unengaged → Engaged: ${demandbase.journeyStages.engaged.criteria}`,
            `Engaged → Qualified: ${demandbase.journeyStages.qualified.criteria}`
        ];

        slide.addText(stages, {
            x: 1,
            y: 4.5,
            w: 8.5,
            h: 1,
            fontSize: 13,
            color: colors.text,
            bullet: true
        });
    }

    // Generate print-friendly HTML
    generatePrintHTML() {
        const isExecutiveMode = this.mode === 'executive';

        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>90-Day ABX Plan - ${this.plan.metadata.verticalName}</title>
    <style>
        @page {
            size: letter;
            margin: 0.75in;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Calibri Light', 'Segoe UI', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.5;
            color: #1a1a2e;
        }

        h1 {
            font-size: 24pt;
            color: #da7036;
            margin-bottom: 0.5em;
            page-break-after: avoid;
        }

        h2 {
            font-size: 18pt;
            color: #da7036;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            page-break-after: avoid;
        }

        h3 {
            font-size: 14pt;
            color: #0f3460;
            margin-top: 1em;
            margin-bottom: 0.3em;
            page-break-after: avoid;
        }

        h4 {
            font-size: 12pt;
            color: #16213e;
            margin-top: 0.8em;
            margin-bottom: 0.2em;
            page-break-after: avoid;
        }

        p, ul, ol {
            margin-bottom: 0.8em;
        }

        ul, ol {
            margin-left: 1.5em;
        }

        li {
            margin-bottom: 0.3em;
        }

        .metadata {
            background: #f5f5f5;
            padding: 1em;
            margin-bottom: 2em;
            border-left: 4px solid #da7036;
        }

        .phase-section {
            page-break-before: always;
            margin-bottom: 2em;
        }

        .week-section {
            margin-bottom: 1.5em;
            page-break-inside: avoid;
        }

        .day-section {
            margin-bottom: 1em;
            padding-left: 1em;
            border-left: 2px solid #e0e0e0;
        }

        .framework-ref {
            font-style: italic;
            color: #666;
            font-size: 10pt;
            ${isExecutiveMode ? 'display: none;' : ''}
        }

        .deliverable {
            font-weight: 600;
            color: #0f3460;
        }

        .metrics-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1em;
            margin-bottom: 1em;
        }

        .metrics-table th {
            background: #f0f0f0;
            padding: 0.5em;
            text-align: left;
            border-bottom: 2px solid #da7036;
        }

        .metrics-table td {
            padding: 0.4em 0.5em;
            border-bottom: 1px solid #e0e0e0;
        }

        @media print {
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .page-break {
                page-break-before: always;
            }
        }
    </style>
</head>
<body>
    ${this.generatePrintContent()}
</body>
</html>
        `;
    }

    // Generate print content
    generatePrintContent() {
        let html = '';

        // Title Page
        html += `
            <div class="title-page">
                <h1>${this.plan.metadata.verticalIcon} ${this.plan.metadata.verticalName}</h1>
                <h2>90-Day ABX Execution Playbook</h2>
                <div class="metadata">
                    <p><strong>Generated:</strong> ${new Date(this.plan.metadata.generatedDate).toLocaleDateString()}</p>
                    <p><strong>Tier:</strong> ${this.plan.metadata.tier}</p>
                    <p><strong>Target CX Budget:</strong> ${this.plan.metadata.cxBudget}</p>
                    <p><strong>Avg Deal Size:</strong> ${this.plan.metadata.avgDealSize}</p>
                    <p><strong>Sales Cycle:</strong> ${this.plan.metadata.salesCycle}</p>
                    <p><strong>Target Personas:</strong> ${this.plan.metadata.selectedPersonas.join(', ')}</p>
                </div>
            </div>
        `;

        // Phase 1
        html += this.generatePhaseHTML(this.plan.phase1, 'Phase 1');

        // Phase 2
        html += this.generatePhaseHTML(this.plan.phase2, 'Phase 2');

        // Phase 3
        html += this.generatePhaseHTML(this.plan.phase3, 'Phase 3');

        // Success Metrics
        html += this.generateMetricsHTML();

        // Demandbase Orchestration
        html += this.generateDemandbaseHTML();

        return html;
    }

    // Generate phase HTML
    generatePhaseHTML(phase, phaseName) {
        let html = `
            <div class="phase-section page-break">
                <h2>${phaseName}: ${phase.title}</h2>
                <p><em>${phase.subtitle}</em></p>
                <p><strong>Duration:</strong> ${phase.duration}</p>
        `;

        const weeks = Object.keys(phase).filter(key => key.startsWith('week'));
        weeks.forEach(weekKey => {
            const week = phase[weekKey];
            html += `
                <div class="week-section">
                    <h3>${weekKey.replace('week', 'Week ')}: ${week.title}</h3>
            `;

            week.days.forEach(day => {
                html += `
                    <div class="day-section">
                        <h4>${day.day}: ${day.title}</h4>
                        <ul>
                `;

                day.activities.forEach(activity => {
                    html += `<li>${activity}</li>`;
                });

                html += `</ul>`;

                if (this.mode === 'working' && day.framework) {
                    html += `<p class="framework-ref">→ Framework: ${day.framework}</p>`;
                }

                if (day.deliverable) {
                    html += `<p class="deliverable">Deliverable: ${day.deliverable}</p>`;
                }

                html += `</div>`;
            });

            html += `</div>`;
        });

        html += `</div>`;
        return html;
    }

    // Generate metrics HTML
    generateMetricsHTML() {
        let html = `
            <div class="metrics-section page-break">
                <h2>${this.plan.successMetrics.title}</h2>
        `;

        this.plan.successMetrics.categories.forEach(category => {
            html += `
                <h3>${category.name}</h3>
                <table class="metrics-table">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>Target</th>
                            <th>Source</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            category.kpis.forEach(kpi => {
                html += `
                    <tr>
                        <td>${kpi.metric}</td>
                        <td>${kpi.target}</td>
                        <td>${kpi.source}</td>
                    </tr>
                `;
            });

            html += `
                    </tbody>
                </table>
            `;
        });

        html += `</div>`;
        return html;
    }

    // Generate Demandbase HTML
    generateDemandbaseHTML() {
        let html = `
            <div class="demandbase-section page-break">
                <h2>${this.plan.demandbaseOrchestration.title}</h2>

                <h3>Scoring Thresholds</h3>
                <ul>
        `;

        const thresholds = this.plan.demandbaseOrchestration.scoringThresholds;
        Object.keys(thresholds).forEach(key => {
            const threshold = thresholds[key];
            html += `
                <li><strong>${key.charAt(0).toUpperCase() + key.slice(1)} (${threshold.score}):</strong>
                ${threshold.timeline} - ${threshold.action}</li>
            `;
        });

        html += `
                </ul>

                <h3>Journey Stage Progression</h3>
                <ul>
        `;

        const stages = this.plan.demandbaseOrchestration.journeyStages;
        Object.keys(stages).forEach(key => {
            const stage = stages[key];
            html += `
                <li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${stage.criteria} → ${stage.action}</li>
            `;
        });

        html += `
                </ul>
            </div>
        `;

        return html;
    }

    // Generate text content for clipboard
    generateTextContent() {
        let text = '';

        // Title
        text += `${this.plan.metadata.verticalIcon} ${this.plan.metadata.verticalName}\n`;
        text += `90-Day ABX Execution Playbook\n`;
        text += `${'='.repeat(60)}\n\n`;

        // Metadata
        text += `Generated: ${new Date(this.plan.metadata.generatedDate).toLocaleDateString()}\n`;
        text += `Tier: ${this.plan.metadata.tier}\n`;
        text += `Target CX Budget: ${this.plan.metadata.cxBudget}\n`;
        text += `Avg Deal Size: ${this.plan.metadata.avgDealSize}\n`;
        text += `Sales Cycle: ${this.plan.metadata.salesCycle}\n`;
        text += `Target Personas: ${this.plan.metadata.selectedPersonas.join(', ')}\n\n`;

        // Phases
        text += this.generatePhaseText(this.plan.phase1, 'Phase 1');
        text += this.generatePhaseText(this.plan.phase2, 'Phase 2');
        text += this.generatePhaseText(this.plan.phase3, 'Phase 3');

        // Success Metrics
        text += `\n${'='.repeat(60)}\n`;
        text += `${this.plan.successMetrics.title}\n`;
        text += `${'='.repeat(60)}\n\n`;

        this.plan.successMetrics.categories.forEach(category => {
            text += `${category.name}:\n`;
            category.kpis.forEach(kpi => {
                text += `  • ${kpi.metric}: ${kpi.target} (${kpi.source})\n`;
            });
            text += `\n`;
        });

        return text;
    }

    // Generate phase text
    generatePhaseText(phase, phaseName) {
        let text = `\n${'='.repeat(60)}\n`;
        text += `${phaseName}: ${phase.title}\n`;
        text += `${phase.subtitle}\n`;
        text += `Duration: ${phase.duration}\n`;
        text += `${'='.repeat(60)}\n\n`;

        const weeks = Object.keys(phase).filter(key => key.startsWith('week'));
        weeks.forEach(weekKey => {
            const week = phase[weekKey];
            text += `${weekKey.replace('week', 'Week ').toUpperCase()}: ${week.title}\n`;
            text += `${'-'.repeat(60)}\n`;

            week.days.forEach(day => {
                text += `\n${day.day}: ${day.title}\n`;
                day.activities.forEach(activity => {
                    text += `  • ${activity}\n`;
                });

                if (this.mode === 'working' && day.framework) {
                    text += `  → Framework: ${day.framework}\n`;
                }

                if (day.deliverable) {
                    text += `  ✓ Deliverable: ${day.deliverable}\n`;
                }
            });

            text += `\n`;
        });

        return text;
    }
}

// Export for use in Command Center
if (typeof window !== 'undefined') {
    window.ExportManager = ExportManager;
}
