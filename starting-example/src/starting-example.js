import invoices from '../data/invoices.json' assert { type: 'json' };
import plays from '../data/plays.json' assert { type: 'json' };

import { statement } from './statement.js';

console.log(statement(invoices[0], plays));
