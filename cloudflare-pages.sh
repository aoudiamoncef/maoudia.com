#!/usr/bin/env bash

DEFAULT_URL="/"
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" == "main" ]]; then
  echo "Build && deploy main branch"
  SITE_URL="www.maoudia.com"
else
  echo "Build && deploy $BRANCH"
  DOMAIN="maoudia.pages.dev"
  SUBDOMAIN=${CF_PAGES_COMMIT_SHA:0:8}
  SITE_URL="${SUBDOMAIN}.${DOMAIN}"
fi

echo "Current baseUrl: ${SITE_URL:-$DEFAULT_URL}"

gem install asciidoctor asciidoctor-html5s && hugo -b https://${SITE_URL:-$DEFAULT_URL} --minify