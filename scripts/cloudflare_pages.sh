#!/usr/bin/env bash

DEFAULT_URL="/"
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" == "main" ]]; then
  SITE_URL="https://www.maoudia.com"
fi

echo "Current baseUrl: ${SITE_URL:-$DEFAULT_URL}"

cd ..

gem install asciidoctor asciidoctor-html5s asciidoctor-rouge

git submodule update --init --recursive --remote

hugo -b ${SITE_URL:-$DEFAULT_URL} --minify

cd scripts && ./sw.sh