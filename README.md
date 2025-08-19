# NITC Monthly Report Generator

[![Deployment Status](https://img.shields.io/badge/deployment-live-brightgreen)](https://petrockc.github.io/NITC-report-generator/)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/petrockc/NITC-report-generator)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Streamlined workflow for converting NITC monthly draft reports into professional HTML and text deliverables for COR submission.

## 🚀 Live Application

**Production Site:** [https://petrockc.github.io/NITC-report-generator/](https://petrockc.github.io/NITC-report-generator/)

## 🚀 Quick Start

### For Team Members (30 seconds)
1. **Visit:** [https://petrockc.github.io/NITC-report-generator/](https://petrockc.github.io/NITC-report-generator/)
2. **Copy** the standard prompt from the "Process Report" tab
3. **Open** new Claude.ai chat → Paste prompt → Upload draft
4. **Download** single generated report

### Monthly Workflow
```
Draft Report → Processing Station → Claude Chat → Single Report → Convert to PDF → COR Submission
```

## 📋 Features

- **🎯 Standardized Processing**: Consistent prompt ensures identical output quality
- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **✅ Quality Checklist**: Built-in validation prevents submission errors
- **🔧 Troubleshooting**: Solutions for common processing issues
- **📚 Instructions**: Step-by-step guide for any team member
- **⚡ One-Click Copy**: Standard prompt copies with single click

## 🛠️ Technology Stack

- **Frontend**: React 18, Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Processing**: Claude.ai integration

## 📖 Documentation

- **[Instructions](docs/INSTRUCTIONS.md)**: Complete usage guide
- **[Quality Checklist](docs/QUALITY_CHECKLIST.md)**: Pre-submission verification
- **[Troubleshooting](docs/TROUBLESHOOTING.md)**: Common issues and solutions
- **[Deployment Guide](deployment/deploy-instructions.md)**: Setup and maintenance

## 🎯 Output Report

### HTML Visual Section
- Navy-inspired professional design
- Interactive training cards with metrics
- KPI dashboard with performance indicators
- PWS section references throughout
- Print-optimized for PDF conversion

### Text Summary Section
- PWS-organized detailed analysis
- Executive summary with key metrics
- Financial data with full precision
- Issue tracking with dates
- Next month objectives

## 📁 Project Structure

```
NITC-report-generator/
├── src/
│   ├── components/
│   │   └── ProcessingStation.js    # Main UI component
│   ├── App.js                      # Application root
│   ├── index.js                    # React entry point
│   └── index.css                   # Tailwind styles
├── docs/                           # Documentation (coming soon)
├── templates/                      # Standard prompts
└── deployment/                     # Deploy instructions
```

## 🚀 Development & Deployment

### Local Development
```bash
git clone https://github.com/petrockc/NITC-report-generator.git
cd NITC-report-generator
npm install
npm start
# Visit http://localhost:3000
```

### Production Deployment
```bash
npm run deploy
# Deploys to GitHub Pages automatically
# Live at: https://petrockc.github.io/NITC-report-generator/
```

## 📋 Quality Standards

### Required Formatting
- ✅ Dates: "Month DD, YYYY" format
- ✅ Financial: Full precision (no rounding)
- ✅ PWS References: All major sections
- ✅ Bullet Alignment: Proper CSS styling
- ✅ Navy Colors: #1e3a8a, #3b82f6

### Success Metrics
- 100% contract compliance
- Zero formatting errors
- Consistent monthly output
- Team self-sufficiency

## 🔧 Maintenance

### Monthly Updates
- [ ] Verify standard prompt accuracy
- [ ] Update contract dates if needed
- [ ] Review quality checklist
- [ ] Test full workflow

### Repository Information
- **Live Site**: [https://petrockc.github.io/NITC-report-generator/](https://petrockc.github.io/NITC-report-generator/)
- **Repository**: [https://github.com/petrockc/NITC-report-generator](https://github.com/petrockc/NITC-report-generator)
- **Primary Contact**: Chris Petrock

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open Pull Request

## 📞 Support

- **Live Application**: [https://petrockc.github.io/NITC-report-generator/](https://petrockc.github.io/NITC-report-generator/)
- **Documentation**: Check `/docs` folder (coming soon)
- **Issues**: Open GitHub issue
- **Repository**: [https://github.com/petrockc/NITC-report-generator](https://github.com/petrockc/NITC-report-generator)

## 🎉 Status

- ✅ **Application Live**: Fully functional React app
- ✅ **Deployment Working**: Automated via GitHub Pages
- ✅ **Team Ready**: Production-ready for monthly reports
- 🔄 **Documentation**: Example files coming soon
- 🔄 **Training**: Team onboarding in progress

---

**Technical Systems Integration, Inc.**  
Contract N0017819D8663 | NITC Monthly Report Generator v1.0

**Built with React • Deployed on GitHub Pages • Ready for Production**