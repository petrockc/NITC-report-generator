# Deployment Instructions

## GitHub Pages Setup
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Site will be available at: https://[username].github.io/[repo-name]

## Custom Domain (Optional)
1. Add CNAME file to public/ directory
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Updates
1. Make changes to code
2. Run `npm run build`
3. Run `npm run deploy`
4. Changes live in ~5 minutes
