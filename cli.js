#!/usr/bin/env node
const { program } = require('commander');
const fancy = require('./index.js');

program
  .name('fancy-fonts')
  .argument('<text>')
  .option('-b, --bold')
  .option('-i, --italic')
  .option('-s, --script')
  .option('-d, --double')
  .action((text, opts) => {
    if (opts.bold) console.log(fancy.toBold(text));
    else if (opts.italic) console.log(fancy.toItalic(text));
    else if (opts.script) console.log(fancy.toScript(text));
    else if (opts.double) console.log(fancy.toDouble(text));
    else console.log(text);
  });

program.parse(process.argv);
