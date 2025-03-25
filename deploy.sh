#!/bin/bash

# Set your GitHub username
GITHUB_USERNAME="your-github-username"
REPO_NAME="english-learning"
TOKEN="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"
REPO_URL="https://${TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

# Initialize git and push to GitHub
git init
git remote add origin $REPO_URL
git add .
git commit -m "Initial commit"
git push -u origin master

# Install dependencies and deploy
npm install
npm run deploy

echo "✅ Deployment completed! Check your site at: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}"
