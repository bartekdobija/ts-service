#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

PGUSER=postgres \
PGHOST=localhost \
PGPASSWORD='' \
PGDATABASE=postgres \
PGPORT=5432 \
API_PORT=8086 \
API_DATADIR=/tmp/media-manager-data \
${DIR}/../node_modules/.bin/nodemon --watch ${DIR}/../src --ignore "src/**/*.spec.ts" --exec node --inspect=127.0.0.1:9233 -r ts-node/register ${DIR}/../src/app.ts