import { formatDate } from '../components/Format/formatDate';

describe('formatDate test', () => {
  it('should format date correctly', () => {
    const result = formatDate('1970-01-01T06:01:00.000Z');
    expect(result).toEqual('1/1/1970 6:01 AM');
  });

  it('should return error for an invalid date', () => {
    try {
      formatDate('1970-1-1T06:01:00.000Z');
    } catch (e: any) {
      expect(e.message).toBe('Invalid Date, please enter a valid date');
    }
  });
});
