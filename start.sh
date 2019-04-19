#!/usr/bin/env bash

cp server/*  dist

exec node ./dist/server.js