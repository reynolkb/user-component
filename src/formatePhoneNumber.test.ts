import { formatPhoneNumber } from '../components/Format/formatPhoneNumber';

describe('formatPhoneNumber test', () => {
  it('should format phone number correctly', () => {
    const result = formatPhoneNumber('5558675309');
    expect(result).toEqual('(555) 867-5309');
  });

  it('should return error for a phone number that is not a number', () => {
    try {
      formatPhoneNumber('hello');
    } catch (e: any) {
      expect(e.message).toBe('Please enter in numbers only');
    }
  });

  it('should return error for a phone number that is not 10 digits', () => {
    try {
      formatPhoneNumber('123');
    } catch (e: any) {
      expect(e.message).toBe('Please enter a 10-digit phone number');
    }
  });
});
