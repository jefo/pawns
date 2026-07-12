#!/bin/bash
# Run this from your local machine after pulling the repo
# Prerequisites: Node.js, npm, git
set -e

cd paws-uyut/site

# Install deps & build
npm install
npx astro build

# Deploy dist/ to gh-pages
cd dist
rm -rf .git
git init
git checkout -b gh-pages
touch .nojekyll
git add -A
git commit -m "deploy"
git remote add origin https://github.com/jefo/pawns.git
git push -u origin gh-pages --force

echo "Done! Site at https://jefo.github.io/pawns/"
