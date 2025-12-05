#!/usr/bin/env bash
# Usage: ./scripts/upstream-merge.sh <git-remote-url> [branch]
set -e
REMOTE_URL=${1}
BRANCH=${2:-main}

if [ -z "${REMOTE_URL}" ]; then
  echo "Usage: $0 <git-remote-url> [branch]"
  exit 1
fi

git fetch ${REMOTE_URL} ${BRANCH}
# Create a branch to review template changes
git checkout -b update-from-template FETCH_HEAD

echo "Template changes are in branch update-from-template. Review and merge manually into your repo."
