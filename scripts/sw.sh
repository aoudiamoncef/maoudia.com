#!/usr/bin/env bash

npm install
npm run build
mkdir -p ../public
cp ../dist/service-worker.js ../public/sw.js
cp ../dist/service-worker.js ../static/sw.js