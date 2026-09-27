#!/bin/sh
set -e
cd "$(dirname "$0")"
npx next build
exec npx next start --hostname 0.0.0.0 --port 3000
