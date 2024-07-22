import { statement } from '../src/statement.js';

import invoices from './mockData/mock.invoices.js';
import plays from './mockData/mock.plays.js';

describe('statement function tests', () => {
  it('should return a detailed statement string for TechCorp', () => {
    const result = statement(invoices[0], plays);
    const expected = `Statement for TechCorp
  Othello: $550.00 (45 seats)
  Macbeth: $400.00 (30 seats)
Amount owed is $950.00
You earned 15 credits\n`;
    expect(result).toBe(expected);
  });

  it('should return a detailed statement string for BigCo', () => {
    const result = statement(invoices[1], plays);
    const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits\n`;
    expect(result).toBe(expected);
  });

  it('should return a detailed statement string for StartupX', () => {
    const result = statement(invoices[2], plays);
    const expected = `Statement for StartupX
  As You Like It: $360.00 (20 seats)
  Hamlet: $750.00 (65 seats)
  Othello: $600.00 (50 seats)
  Macbeth: $400.00 (30 seats)
Amount owed is $2,110.00
You earned 59 credits\n`;
    expect(result).toEqual(expected);
  });
});
