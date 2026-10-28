#!/usr/bin/env bash
# Builds the static site and publishes the out/ folder to the gh-pages branch,
# served at the custom domain https://codevira.uk.
# Usage: bash scripts/deploy-pages.sh
set -euo pipefail
export MSYS_NO_PATHCONV=1
DOMAIN="${CUSTOM_DOMAIN:-codevira.uk}"

rm -rf out
PAGES_BASE_PATH="" npm run build
touch out/.nojekyll
echo "$DOMAIN" > out/CNAME

REMOTE=$(git remote get-url origin)
cd out
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy website $(date -u +%Y-%m-%dT%H:%MZ)"
git push -f "$REMOTE" gh-pages
rm -rf .git
echo "Published to https://$DOMAIN"
