#!/usr/bin/env bash

DEFAULT_URL="/"
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" == "main" ]]; then
  SITE_URL="https://www.maoudia.com"
fi

echo "Current baseUrl: ${SITE_URL:-$DEFAULT_URL}"

cd ..

gem install asciidoctor asciidoctor-html5s asciidoctor-rouge

echo "Updating to latest theme submodule"
git submodule update --init --recursive --remote

echo "Building Hugo website"
hugo -b ${SITE_URL:-$DEFAULT_URL} --minify

echo "Building service worker"
cd scripts && ./sw.sh