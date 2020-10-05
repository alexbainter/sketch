#!/usr/bin/env node

'use strict';

const { argv } = process;
const run = require('../lib/run');
const eject = require('../lib/eject');

if (argv.length < 3 || argv[2] === 'run') {
  run();
}
