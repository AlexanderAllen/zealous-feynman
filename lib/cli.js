#!/usr/bin/env node
'use strict';
const meow = require('meow');
const zealousFeynman = require('./');

const cli = meow(`
Usage
  $ zealous-feynman [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ zealous-feynman
  unicorns
  $ zealous-feynman rainbows
  unicorns & rainbows
`);
