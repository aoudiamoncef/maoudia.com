#!/usr/bin/env bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$BRANCH" == "main" ]]; then
  echo "Build && deploy main branch"
  SITE_URL="www.maoudia.com"
  echo "Production baseUrl: ${SITE_URL}"
  gem install asciidoctor asciidoctor-html5s && hugo -b https://${SITE_URL} --minify
else
  echo "Build && deploy $BRANCH"
  DOMAIN="maoudia.pages.dev"
  COMMIT_SHA=$(git rev-parse HEAD)
  SUBDOMAIN=${COMMIT_SHA:0:7}
  SITE_URL="${SUBDOMAIN}.${DOMAIN}"
  echo "CloudFlare Pages developement baseUrl: ${SITE_URL}"
  gem install asciidoctor asciidoctor-html5s && hugo -b https://${SITE_URL} --minify
fi