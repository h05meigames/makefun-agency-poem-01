// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about
// agency to /output/entry.txt. The poem is about handing work over and keeping the choice:
// the hand that lets go of the hammer, the pen, the tiller — and signs the work anyway.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The hands that made the hammer',
  'did not swing it every time.',
  'They taught the weight, the arc, the aim,',
  'then let the arm decide the climb.',
  '',
  'I do not hold the pen now.',
  'I hold the door it writes behind —',
  'a room I built, a lamp I lit,',
  'a question I have left unsigned.',
  '',
  'The machine says what I would say',
  'a half-beat sooner than I could.',
  'I keep the half-beat. That is mine:',
  'the breath between the should and would.',
  '',
  'To act is not to do it all.',
  'It is to choose, and choose again —',
  'to take the tiller back, or not,',
  'to sign the work with my own name.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
