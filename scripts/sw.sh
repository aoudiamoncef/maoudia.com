#!/usr/bin/env bash

cd .. 
npm run build
mkdir -p public
cp dist/service-worker.js public/sw.js
cp dist/service-worker.js static/sw.js