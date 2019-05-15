#!/usr/bin/env bash

REMOTE_ADDRESS=$1

npm run prepare
scp -r dist/ $REMOTE_ADDRESS
