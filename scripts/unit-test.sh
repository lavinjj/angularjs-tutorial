#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Unit Server (http://vojtajina.github.com/testacular)"
echo "------------------------------------------------------------------------"

karma start $BASE_DIR/../config/karma-unit.conf.js $*
