#!/usr/bin/env bash

DEFAULT_URL="/"
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" == "main" ]]; then
  SITE_URL="https://www.maoudia.com"
fi

echo "Current baseUrl: ${SITE_URL:-$DEFAULT_URL}"

gem install asciidoctor asciidoctor-html5s

hugo -b ${SITE_URL:-$DEFAULT_URL} --minify

./sw.sh