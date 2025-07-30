import React, { useState } from 'react';
import { Upload, FileText, Download, CheckCircle, AlertCircle, Info, Copy, BookOpen, Settings } from 'lucide-react';

const ProcessingStation = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [promptCopied, setPromptCopied] = useState(false);

  const standardPrompt = `Please process this NITC monthly draft report and generate both deliverables using the established NITC guidelines:

**DELIVERABLE 1: HTML Visual Report**
- Navy-inspired design with blue color scheme (#1e3a8a, #3b82f6)
- Training cards with 4-5 specific bullet points each
- PWS section references in all major headers (e.g., "Section Title (PWS X.X)")
- Consistent date format: "Month DD, YYYY" (e.g., "August 15, 2025")
- Full financial precision - never round (e.g., "$12,633,596.54")
- Bullet points aligned with card text (padding-left: 0; list-style-position: inside)
- KPI cards showing contract performance metrics
- Professional tables with status badges
- Print-optimized for PDF conversion

**DELIVERABLE 2: Text Summary Report**
- Organized by PWS sections (3.1, 3.2, 3.3, etc.)
- Executive summary with key performance highlights
- Detailed program information with quantified metrics
- Financial transparency with exact figures
- Issue tracking with submission dates
- Next month objectives
- Professional markdown formatting

**QUALITY REQUIREMENTS:**
- Extract specific achievements, dates, numbers from source
- Include PWS paragraph references throughout
- Maintain all decimal places in financial data
- Use consistent date formatting across both reports
- Ensure bullet alignment in HTML cards
- Validate all KPI percentages and metrics

Please create both reports as separate artifacts that can be copied and saved.`;

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
