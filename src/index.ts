#!/usr/bin/env node

import { Command } from 'commander'
import { convert, convertOptions } from './convert'

const program = new Command()
const version = require('../package.json').version
program
  .version(version, '-v, --version', 'output the version number')
  .description('process JSON file from CACTUS website to convert into CSV.')

program
  .argument('<file>')
  .option('-o, --output <output_file>', 'CSV file path')
  .action(async (file: string, options: convertOptions) => {
    options.output = options.output ? options.output : 'data.csv'
    convert(file, options)
  })
program.parse(process.argv)
