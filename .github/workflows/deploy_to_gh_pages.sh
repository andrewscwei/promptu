#!/bin/bash

# Required environment variables:
# - GH_USER: Name of GitHub user to use for the commit
# - GH_PAGES_DIR: Directory (relative to project root) to deploy to GitHub Pages
# - GH_REPO: The owner and repository name to commit to.

__GH_PAGES_DIR__=${GH_PAGES_DIR:-.gh-pages}
__GH_USER__=${GH_USER:-$GITHUB_ACTOR}
__GH_REPO__=${GH_REPO:-$GITHUB_REPOSITORY}
# __ORIGIN_URL__=`git config --get remote.origin.url`
__ORIGIN_URL__="https://$__GH_USER__:$GH_TOKEN@github.com/$__GH_REPO__.git"

if [ `git branch | grep gh-pages` ]; then
  git branch -D gh-pages
fi

git checkout -b gh-pages
npm run pages

# Move generated files to root and delete everything else.
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name ${__GH_PAGES_DIR__} ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv ${__GH_PAGES_DIR__}/* .
rm -R ${__GH_PAGES_DIR__}/

# Push to gh-pages.
git config user.name "$(git --no-pager log --format=format:'%an' -n 1)"
git config user.email "$(git --no-pager log --format=format:'%ae' -n 1)"
git add -fA
git commit --allow-empty -m "[SKIP CI] $(git log -1 --pretty=%B)"
git push -f $__ORIGIN_URL__ gh-pages

echo "Successfully published docs to GitHub Pages"
