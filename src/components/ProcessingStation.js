import React, { useState } from 'react';
import { Upload, FileText, Download, CheckCircle, AlertCircle, Info, Copy, BookOpen, Settings } from 'lucide-react';

const ProcessingStation = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [promptCopied, setPromptCopied] = useState(false);

  const standardPrompt = `Please process this NITC monthly draft report and generate both deliverables using the EXACT formatting specifications below:

**DELIVERABLE 1: HTML Visual Report**

**MANDATORY: Use this EXACT CSS and HTML structure:**

Required CSS Framework:
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

.header {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

.section-title {
    background: #f1f5f9;
    color: #1e40af;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid #3b82f6;
    font-size: 1.4rem;
    font-weight: 600;
}

.training-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.training-card ul {
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #4b5563;
    padding-left: 0;
    list-style-position: inside;
}

.kpi-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.kpi-value {
    font-size: 2rem;
    font-weight: bold;
    color: #22c55e;
    margin-bottom: 0.5rem;
}

.table-responsive {
    overflow-x: auto;
    margin: 1rem 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

th {
    background: #374151;
    color: white;
    padding: 1rem 0.75rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
}

td {
    padding: 0.75rem;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.9rem;
}

tr:nth-child(even) {
    background-color: #f9fafb;
}

**CRITICAL: Use this EXACT table styling for ALL tables in the report:**
- Pending Funding Status table
- FST Classes table  
- Contract KPIs table
- Financial Details table
- Any other tables throughout the report
ALL tables must have dark headers (#374151) and alternating row colors for consistency.

**EXACT Section Structure Required:**
1. Executive Summary - with 4 KPI cards in grid
2. Training Operations Overview (PWS 3.1) - with 2x2 training cards grid
3. Program Management Achievements (PWS 3.6) - with subsections
4. Fundamental Skills Training (FST) (PWS 3.1) - with green overview box and achievements
5. Technical and Specialized Training (TST) (PWS 3.1) - with green overview box and details
6. Aviation Training Division (ATD) (PWS 3.1) - with green overview box and details
7. Contractor Personnel Changes - always include even if no changes
8. Current Issues & Funding Status (PWS 3.3.2) - with pending funding table
9. Financial Performance - with metrics grid and detailed table
10. Contract Key Performance Indicators - with compliance table
11. [Next Month] Objectives - with highlight box

**Training Operations Overview - MANDATORY 2x2 Grid Layout:**
.training-grid-2x2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 1rem 0;
}

@media (max-width: 768px) {
    .training-grid-2x2 {
        grid-template-columns: 1fr;
    }
}

**Grid Organization (Row 1 Top, Row 2 Bottom):**
- Row 1: BUD/S Preparation Course (left), Dive Preparation Course (right)
- Row 2: NAS Pensacola Aviation Training (left), NAS Whiting Field Aviation Training (right)

**FST, TST, and ATD Sections - MANDATORY Overview Format:**
Each section must include a green highlight overview box before any cards or details:

<div class="highlight-box">
    <h4><strong>[Month] [Year] Overview:</strong></h4>
    <p>[2-3 sentence summary of key activities, achievements, and current status for this division]</p>
</div>

**Training Card Template (Use This Exact Format):**
<div class="training-card">
    <h4>[Program Name] <span style="font-size: 0.8em; color: #64748b;">(PWS X.X)</span></h4>
    <p>[Brief program description]</p>
    <ul style="margin: 1rem 0; font-size: 0.9rem; color: #4b5563; padding-left: 0; list-style-position: inside;">
        <li>[Specific achievement with numbers and dates]</li>
        <li>[Specific achievement with numbers and dates]</li>
        <li>[Specific achievement with numbers and dates]</li>
        <li>[Specific achievement with numbers and dates]</li>
    </ul>
    <div class="metrics-row">
        <div class="metric-item">
            <div class="metric-value">[Number]</div>
            <div class="metric-label">[Label]</div>
        </div>
    </div>
</div>

**Financial Performance Section - MANDATORY Table Format:**
<div class="subsection">
    <div class="subsection-title">July 2025 Financial Details</div>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Financial Metric</th>
                    <th>Amount</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monthly Hours</td>
                    <td>6,411.00</td>
                    <td>Actual labor hours for July 2025</td>
                </tr>
                <tr>
                    <td>Overtime Hours</td>
                    <td>None</td>
                    <td>Actual overtime hours for July 2025</td>
                </tr>
                <tr>
                    <td>Monthly Burn Rate</td>
                    <td>62.94%</td>
                    <td>Percentage of available funding utilized</td>
                </tr>
                <tr>
                    <td>Invoice Date</td>
                    <td>July 2, 2025</td>
                    <td>Invoice #INV-0000001548</td>
                </tr>
                <tr>
                    <td>Travel (CLIN 7100)</td>
                    <td>$130.34 remaining</td>
                    <td>94.55% expended ($2,392.04 funded)</td>
                </tr>
                <tr>
                    <td>ODCs (CLIN 7110)</td>
                    <td>$66,317.02 remaining</td>
                    <td>31.73% expended ($97,140.02 funded)</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

**Contractor Personnel Changes Section - ALWAYS REQUIRED:**
Include this section even if no changes occurred:

<div class="section">
    <div class="section-title">Contractor Personnel Changes</div>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Change From</th>
                    <th>Change To</th>
                    <th>Effective Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="4" style="text-align: center; padding: 2rem; color: #6b7280;">
                        No personnel changes during [Month] [Year]
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

**DELIVERABLE 2: Text Summary Report**

EXACT Structure Required:
# NITC Monthly Report Summary
## [Month] [Year]

**Contract:** N0017819D8663, Delivery Order N0018924F3006  
**Contractor:** Technical Systems Integration, Inc.  
**Period:** [Month] 1-31, [Year]  
**Submitted to:** Mrs. Shay Previllon, COR

## Executive Summary
## PWS 3.1 - Educational and Training Services
## PWS 3.2 - Training Implementation
## PWS 3.3 - Systems Engineering and Technical Services
## PWS 3.6 - Training Liaison
## Financial Performance Summary
## Current Issues and Corrective Actions
## [Next Month] Objectives

**CRITICAL Formatting Requirements:**
- Dates: ALWAYS "Month DD, YYYY" format (e.g., "August 15, 2025")
- Financial: NEVER round - show exact decimals (e.g., "$12,633,596.54")
- PWS References: In ALL section headers (e.g., "Section Title (PWS X.X)")
- Colors: Navy blues #1e3a8a and #3b82f6 ONLY
- Bullet Points: Use padding-left: 0; list-style-position: inside;
- Training Cards: 4-5 specific bullet points each with quantified achievements

**QUALITY CONTROL CHECKLIST:**
- Navy color scheme (#1e3a8a, #3b82f6) used throughout
- All dates in "Month DD, YYYY" format
- Financial figures show full precision (never rounded)
- PWS references in ALL major section headers
- Training cards have exactly 4-5 bullet points
- Bullet points use proper CSS alignment
- KPI cards show percentages
- Responsive grid layouts used
- ALL tables have consistent dark headers (#374151)
- ALL tables have alternating row colors (#f9fafb)

**CRITICAL: Generate Both Reports as Separate Artifacts**
Create the HTML report as one artifact and the text summary as a completely separate artifact. Follow this template EXACTLY. Do not deviate from the CSS styles, HTML structure, or formatting requirements. Consistency is critical for monthly reporting.`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(standardPrompt);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  const instructions = [
    {
      step: 1,
      title: "Prepare Your Draft Report",
      details: "Ensure your monthly draft contains all required sections: training data, financial metrics, student numbers, administrative actions, and issues."
    },
    {
      step: 2,
      title: "Copy the Standard Prompt",
      details: "Use the standardized prompt below to ensure consistent output formatting and quality."
    },
    {
      step: 3,
      title: "Start New Claude Chat",
      details: "Open a fresh conversation with Claude to avoid context confusion from previous chats."
    },
    {
      step: 4,
      title: "Paste Prompt & Upload File",
      details: "Paste the standard prompt, then upload your draft report file (.docx, .pdf, or .txt)."
    },
    {
      step: 5,
      title: "Review Generated Reports",
      details: "Claude will create two artifacts: HTML visual report and text summary. Review both for accuracy."
    },
    {
      step: 6,
      title: "Save & Submit",
      details: "Copy HTML code to save as .html file. Copy text report for .txt/.pdf. Submit both to COR."
    }
  ];

  const qualityChecklist = [
    "All dates formatted as 'Month DD, YYYY'",
    "PWS references included in section headers",
    "Financial figures show full precision (no rounding)",
    "Training cards have 4-5 specific bullet points",
    "Bullet points align with card text",
    "KPI percentages match source data",
    "Issue status current as of report date",
    "Contact information and signatures current"
  ];

  const troubleshootingTips = [
    {
      issue: "Claude doesn't generate both artifacts",
      solution: "Ask: 'Please create the HTML report as one artifact and the text summary as a separate artifact.'"
    },
    {
      issue: "Dates are inconsistent",
      solution: "Specify: 'Please ensure ALL dates use the format Month DD, YYYY throughout both reports.'"
    },
    {
      issue: "Financial figures are rounded",
      solution: "Emphasize: 'Use exact financial figures with all decimal places - never round dollar amounts.'"
    },
    {
      issue: "Missing PWS references",
      solution: "Request: 'Add PWS section references to all major headers (e.g., Training Operations (PWS 3.1)).'"
    },
    {
      issue: "Bullet points not aligned",
      solution: "Ask for: 'Fix bullet point alignment in training cards using padding-left: 0; list-style-position: inside;'"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">NITC Monthly Report Processing Station</h1>
        <p className="text-gray-600">Complete workflow for generating HTML and text deliverables from draft reports</p>
        <div className="mt-2 text-sm text-gray-500">
          Contract N0017819D8663 | Technical Systems Integration, Inc.
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {[
          { id: 'process', label: 'Process Report', icon: FileText },
          { id: 'instructions', label: 'Instructions', icon: BookOpen },
          { id: 'quality', label: 'Quality Check', icon: CheckCircle },
          { id: 'troubleshoot', label: 'Troubleshooting', icon: Settings }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={16} className="mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Process Report Tab */}
      {activeTab === 'process' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Standard Processing Prompt</h2>
            <p className="text-blue-700 mb-4">Copy this prompt and use it with every monthly report for consistent results:</p>
            
            <div className="bg-white border border-blue-200 rounded-lg p-4 relative">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap overflow-x-auto max-h-96 pr-16">
{standardPrompt}
              </pre>
              <button
                onClick={copyPrompt}
                className={`absolute top-2 right-2 px-3 py-1 rounded text-sm font-medium transition-colors ${
                  promptCopied 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                <Copy size={14} className="inline mr-1" />
                {promptCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Expected Output</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">HTML Artifact:</strong>
                    <p className="text-green-700 text-sm">Visual report with Navy styling, training cards, and KPI dashboard</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Text Artifact:</strong>
                    <p className="text-green-700 text-sm">PWS-organized summary with detailed metrics and analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Processing Tips</h3>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Use a fresh Claude chat for each report</li>
                <li>• Upload draft file immediately after pasting prompt</li>
                <li>• Review both artifacts before saving</li>
                <li>• Test HTML file in browser before submission</li>
                <li>• Keep draft file name for reference</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Access Links</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="https://claude.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Upload size={20} className="text-blue-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Open Claude.ai</div>
                  <div className="text-sm text-gray-500">Start processing</div>
                </div>
              </a>
              <button 
                onClick={copyPrompt}
                className="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <Copy size={20} className="text-green-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Copy Prompt</div>
                  <div className="text-sm text-gray-500">{promptCopied ? 'Copied!' : 'One-click copy'}</div>
                </div>
              </button>
              <div className="flex items-center p-3 bg-white border border-gray-300 rounded-lg">
                <FileText size={20} className="text-purple-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">View Examples</div>
                  <div className="text-sm text-gray-500">See sample outputs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions Tab */}
      {activeTab === 'instructions' && (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h2>
            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                    {instruction.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1">{instruction.title}</h3>
                    <p className="text-gray-600 text-sm">{instruction.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">File Handling</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Supported Input Files:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Microsoft Word (.docx, .doc)</li>
                  <li>• PDF files (.pdf)</li>
                  <li>• Text files (.txt)</li>
                  <li>• Maximum file size: 10MB</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Output Files:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• HTML file for visual report</li>
                  <li>• Text/Markdown file for summary</li>
                  <li>• Both ready for PDF conversion</li>
                  <li>• Professional formatting applied</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quality Check Tab */}
      {activeTab === 'quality' && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-900 mb-4">Quality Assurance Checklist</h2>
            <p className="text-green-700 mb-4">Verify these items before submitting reports to the COR:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {qualityChecklist.map((item, index) => (
                <div key={index} className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3 flex-shrink-0" />
                  <span className="text-green-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Final Review Points</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-yellow-800">Financial Data:</strong>
                  <p className="text-yellow-700 text-sm">Verify all dollar amounts match source data exactly - no rounding</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-yellow-800">Student Numbers:</strong>
                  <p className="text-yellow-700 text-sm">Cross-check enrollment figures and graduation dates</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-yellow-800">Issue Status:</strong>
                  <p className="text-yellow-700 text-sm">Ensure all pending items show current status and dates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Troubleshooting Tab */}
      {activeTab === 'troubleshoot' && (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-900 mb-4">Common Issues & Solutions</h2>
            <div className="space-y-4">
              {troubleshootingTips.map((tip, index) => (
                <div key={index} className="border-l-4 border-red-300 pl-4">
                  <h3 className="font-semibold text-red-800 mb-1">Issue: {tip.issue}</h3>
                  <p className="text-red-700 text-sm"><strong>Solution:</strong> {tip.solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Support</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">If Claude seems confused:</strong>
                  <p className="text-gray-600 text-sm">Start a completely new chat and re-paste the standard prompt</p>
                </div>
              </div>
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">For formatting issues:</strong>
                  <p className="text-gray-600 text-sm">Ask Claude to "fix the formatting" and specify exactly what needs correction</p>
                </div>
              </div>
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">Missing data:</strong>
                  <p className="text-gray-600 text-sm">Point out specific sections that are missing and ask Claude to include them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 bg-blue-900 text-white rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Ready to Process Your Report?</h3>
        <p className="text-blue-200 mb-4">Copy the standard prompt above and start a new Claude chat</p>
        <div className="text-sm text-blue-300">
          Remember: Draft Report → Standard Prompt → Upload → Review → Save → Submit
        </div>
        <div className="mt-4 pt-4 border-t border-blue-800 text-xs text-blue-300">
          NITC Report Generator v1.0 | Technical Systems Integration, Inc.
        </div>
      </div>
    </div>
  );
};

export default ProcessingStation;