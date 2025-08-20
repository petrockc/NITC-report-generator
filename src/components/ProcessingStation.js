import React, { useState } from 'react';
import { Upload, FileText, Download, CheckCircle, AlertCircle, Info, Copy, BookOpen, Settings } from 'lucide-react';

const ProcessingStation = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [promptCopied, setPromptCopied] = useState(false);

  const standardPrompt = `Please process this NITC monthly draft report and generate a SINGLE comprehensive HTML report combining both visual and detailed text formats:

**DELIVERABLE: Combined HTML Report Structure**

**PART 1: Visual Executive Report (First Half)**
- Executive Summary with KPI cards (4 cards in horizontal grid)
- Training Operations Overview (adaptive grid based on active programs)
- Program Management Achievements (PWS 3.6)
- Training Division sections (FST, TST, ATD) with green overview boxes (only include divisions with activity)
- Contractor Personnel Changes (always include, even if no changes)
- Current Issues & Funding Status (PWS 3.3.2)
- Financial Performance with detailed table
- Contract Key Performance Indicators

**PART 2: Detailed Text Summary (Second Half)**
Add blue section divider, then include detailed text analysis, ending with gray footer:
- Complete PWS-organized text analysis
- Detailed program narratives for active programs only
- Comprehensive financial breakdown
- Full issue documentation
- Next month objectives
- Gray footer banner at the very end

**ADAPTIVE CONTENT STRUCTURE**

**Training Operations Overview - Flexible Grid:**
- Create grid based on ACTIVE programs mentioned in the draft
- Use 2x2 grid if 4 programs are active
- Use 2x1 grid if 2-3 programs are active  
- Use single column if only 1 program is active
- Common programs: BUD/S Preparation, Dive Preparation, NAS Pensacola Aviation, NAS Whiting Field Aviation
- IMPORTANT: Only include programs that have actual activity/students in the reporting period

**Training Division Sections - Conditional Inclusion:**
Only create sections for divisions with reported activity:
- FST (Fundamental Skills Training) - Include if Basic Military Training, dunker training, or foundational courses mentioned
- TST (Technical and Specialized Training) - Include if specialized technical courses, certifications, or advanced training mentioned  
- ATD (Aviation Training Division) - Include if flight training, aviation courses, or pilot/aircrew training mentioned

Format for each active division:
<div class="highlight-box">
    <h4><strong>[Month] [Year] Overview:</strong></h4>
    <p>[2-3 sentence summary of key activities, achievements, and current status for this division]</p>
</div>

**Financial Data - Use Actual Values:**
Extract and use EXACT financial figures from the draft:
- Monthly labor hours (exact number from draft)
- Invoice amounts (full precision, never rounded)
- Burn rates (to 2 decimal places)
- Remaining funding by CLIN (exact amounts)
- Travel and ODC balances (actual remaining amounts)

**MANDATORY CSS AND HTML STRUCTURE:**

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

.kpi-grid {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 1rem auto;
    max-width: 880px;
    gap: 20px;
}

.kpi-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    flex-shrink: 0;
    flex-grow: 0;
}

.training-grid {
    display: grid;
    gap: 1.5rem;
    margin: 1rem 0;
}

.grid-2x2 { grid-template-columns: repeat(2, 1fr); }
.grid-2x1 { grid-template-columns: repeat(2, 1fr); }
.grid-1x1 { grid-template-columns: 1fr; }

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

.highlight-box {
    background: #f0fdf4;
    border: 1px solid #22c55e;
    border-radius: 8px;
    padding: 1.5rem;
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

**CONTENT EXTRACTION GUIDELINES:**

Training Card Template (Adapt to actual programs):
<div class="training-card">
    <h4>[Actual Program Name from Draft] <span style="font-size: 0.8em; color: #64748b;">(PWS X.X)</span></h4>
    <p>[Brief program description based on activities]</p>
    <ul style="margin: 1rem 0; font-size: 0.9rem; color: #4b5563; padding-left: 0; list-style-position: inside;">
        <li>[Extract specific achievements with numbers and dates from draft]</li>
        <li>[Include graduations, arrivals, completions mentioned]</li>
        <li>[Add simulator events, classroom hours if specified]</li>
        <li>[Mention any zero failure rates or exceptional performance]</li>
    </ul>
    <div class="metrics-row">
        <div class="metric-item">
            <div class="metric-value">[Extract actual numbers from draft]</div>
            <div class="metric-label">[Use appropriate label based on context]</div>
        </div>
    </div>
</div>

**Date Formatting Standard:**
- ALWAYS use format: Month DD, YYYY
- Examples: "August 15, 2025", "September 03, 2025"
- Never use: Aug 15, 2025 or 15 August 2025 or 8/15/25

**Financial Precision:**
- NEVER round financial figures
- Use exact amounts: "$12,633,596.54" not "$12.6M"
- Include all decimal places as provided in source data

**Blue Section Divider (Visual Separator):**
<div style="margin-top: 3rem; padding-top: 2rem; border-top: 3px solid #1e40af;">
    <div style="text-align: center; background: #f1f5f9; padding: 1rem; margin-bottom: 2rem;">
        <h2 style="color: #1e40af; margin: 0;">DETAILED MONTHLY SUMMARY</h2>
        <p style="color: #64748b; margin: 0.5rem 0 0 0;">Comprehensive PWS-Organized Analysis</p>
    </div>
</div>

**Gray Footer Banner (End of Document):**
<div class="footer" style="background: #f1f5f9; padding: 2rem; text-align: center; color: #64748b; font-size: 0.9rem;">
    <p><strong>Report Prepared By:</strong><br>Tony Moreno, Program Manager | Phone: (904) 738-2926</p>
    <p><strong>Technical Systems Integration, Inc.</strong> | Contract N0017819D8663, Delivery Order N0018924F3006</p>
    <p>Submitted to: Mrs. Shay Previllon, Contracting Officer's Representative</p>
</div>

**CRITICAL INSTRUCTIONS:**

1. Analyze the draft first - Identify which programs/divisions have actual activity before creating sections
2. Use adaptive grids - Don't force a 2x2 grid if only 2 programs are active
3. Extract exact data - Pull specific numbers, dates, and achievements from the draft content
4. Include PWS references - Add (PWS X.X) to all major section headers
5. Maintain consistency - Use dark table headers (#374151) and alternating row colors for ALL tables
6. Create single HTML artifact - Include both visual report and detailed text summary in one document

GENERATE: One comprehensive HTML artifact that adapts to the actual content and activity levels described in the monthly draft report.`;

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
      title: "Review Generated Report",
      details: "Claude will create one comprehensive HTML artifact with both visual and detailed sections. Review for accuracy."
    },
    {
      step: 6,
      title: "Save & Submit",
      details: "Copy HTML code to save as .html file. Convert to PDF for COR submission. Single document contains everything."
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
      issue: "Claude doesn't generate the combined report",
      solution: "Ask: 'Please create ONE comprehensive HTML report that includes both the visual section and detailed text summary sections.'"
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
    },
    {
      issue: "Grid layout issues",
      solution: "Specify: 'Use adaptive grid - only create cards for programs with actual activity this month.'"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">NITC Monthly Report Processing Station</h1>
        <p className="text-gray-600">Complete workflow for generating comprehensive HTML reports from draft reports</p>
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
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Robust Processing Prompt</h2>
            <p className="text-blue-700 mb-4">This adaptive prompt works with varying programs and monthly data:</p>
            
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
              <h3 className="text-lg font-semibold text-green-900 mb-3">Key Improvements</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Adaptive Grid System:</strong>
                    <p className="text-green-700 text-sm">Adjusts layout based on active programs (1-4 training cards)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Conditional Sections:</strong>
                    <p className="text-green-700 text-sm">Only creates FST/TST/ATD sections when there's actual activity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Dynamic Data Extraction:</strong>
                    <p className="text-green-700 text-sm">Uses actual financial figures and dates from your draft</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Flexibility Features</h3>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Works with any number of training programs</li>
                <li>• Adapts to different monthly financial data</li>
                <li>• Handles varying course schedules</li>
                <li>• Analyzes draft content before building structure</li>
                <li>• Maintains professional formatting standards</li>
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
                  <div className="font-medium text-gray-900">Robust Design</div>
                  <div className="text-sm text-gray-500">Adapts to any month</div>
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
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Monthly Variation Handling</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Adaptive Features:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Grid adjusts to active program count</li>
                  <li>• Sections created only when needed</li>
                  <li>• Financial data extracted from draft</li>
                  <li>• Dates formatted consistently</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Common Scenarios:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• No BUD/S training this month ✓</li>
                  <li>• Only 2 programs active ✓</li>
                  <li>• Different financial amounts ✓</li>
                  <li>• Varying student numbers ✓</li>
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
                  <strong className="text-yellow-800">Grid Layout:</strong>
                  <p className="text-yellow-700 text-sm">Ensure grid adapts to actual number of active programs</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-yellow-800">Section Inclusion:</strong>
                  <p className="text-yellow-700 text-sm">Verify only active divisions (FST/TST/ATD) are included</p>
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
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-800">Wrong grid layout:</strong>
                  <p className="text-gray-600 text-sm">Remind Claude to "analyze which programs are active and use appropriate grid size"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Robust Prompt Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-purple-800 mb-2">Handles Variations:</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Seasonal program changes</li>
                  <li>• Different student numbers</li>
                  <li>• Varying financial data</li>
                  <li>• Course schedule modifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-purple-800 mb-2">Maintains Standards:</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Professional formatting</li>
                  <li>• Consistent styling</li>
                  <li>• PWS compliance</li>
                  <li>• COR requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 bg-blue-900 text-white rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Ready to Process Your Report?</h3>
        <p className="text-blue-200 mb-4">Copy the robust prompt above and start a new Claude chat</p>
        <div className="text-sm text-blue-300 mb-4">
          Remember: Draft Report → Robust Prompt → Upload → Review → Save → Submit
        </div>
        <div className="bg-blue-800 rounded p-3 text-center">
          <div className="text-sm font-medium text-blue-200 mb-1">✨ Now with Adaptive Intelligence</div>
          <div className="text-xs text-blue-300">Works with any month's data • Flexible grid system • Smart section detection</div>
        </div>
        <div className="mt-4 pt-4 border-t border-blue-800 text-xs text-blue-300">
          NITC Report Generator v2.0 | Technical Systems Integration, Inc.
        </div>
      </div>
    </div>
  );
};

export default ProcessingStation;