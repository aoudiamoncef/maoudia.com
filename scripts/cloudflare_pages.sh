#!/usr/bin/env bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

cd ..

gem install asciidoctor asciidoctor-html5s asciidoctor-rouge

echo "Updating to latest theme submodule"
git submodule update --init --recursive --remote

echo "Building Hugo website"
hugo --minify

echo "Building service worker"
cd scripts && ./sw.sh