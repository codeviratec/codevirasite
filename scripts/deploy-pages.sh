#!/usr/bin/env bash
# Builds the static site and publishes the out/ folder to the gh-pages branch.
# Usage:
#   bash scripts/deploy-pages.sh                 # site served at <user>.github.io/codevirasite
#   CUSTOM_DOMAIN=codevira.uk bash scripts/deploy-pages.sh   # site served at the custom domain
set -euo pipefail
export MSYS_NO_PATHCONV=1

if [ -n "${CUSTOM_DOMAIN:-}" ]; then
  export PAGES_BASE_PATH=""
else
  export PAGES_BASE_PATH="/codevirasite"
fi

rm -rf out
npm run build
touch out/.nojekyll
[ -n "${CUSTOM_DOMAIN:-}" ] && echo "$CUSTOM_DOMAIN" > out/CNAME

REMOTE=$(git remote get-url origin)
cd out
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy website $(date -u +%Y-%m-%dT%H:%MZ)"
git push -f "$REMOTE" gh-pages
rm -rf .git
echo "Published to gh-pages."
