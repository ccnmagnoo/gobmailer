import MailListGen from '@/app/libs/MailList';
import { gobmailer } from '@/app/libs/gobmailer';

describe('generation list', () => {
  test('adds 1 + 2 to equal 3', () => {
    const mailList = new MailListGen('institution', ['test']);
    expect(mailList).toBe(['ccamposn@minenergia.cl']);
  });
});
