#!/usr/bin/env bash

REMOTE_ADDRESS=$1

npm run prepare
cp ./google122d8fd6abc5976f.html  ./dist
cp ./robots.txt  ./dist
scp -r dist/ $REMOTE_ADDRESS
