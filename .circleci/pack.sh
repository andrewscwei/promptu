#!/bin/bash

source .circleci/get_opts.sh

mkdir package
npm pack
mv $PACKAGE_FILE.tgz package/
