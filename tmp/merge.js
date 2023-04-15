import { mergeRules } from '../lib/utils.js';

const result = mergeRules(
  [
    [ /wibble/, { class: 'frusset-pouch' } ],
    [ /wobble/, { class: 'bobble' } ],
    { foo: 'bar' }
  ],
  [
    [ /wiz/, { class: 'bang' } ],
    { wam: 'bam' }
  ],
)

console.log('result: ', result);
