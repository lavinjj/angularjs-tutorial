#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma E2E Server (http://vojtajina.github.com/testacular)"
echo "------------------------------------------------------------------------"
echo $BASE_DIR

karma start $BASE_DIR/../config/karma-scenario.conf.js $*
