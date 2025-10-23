import { UAParser } from 'ua-parser-js';

export const getDeviceInfo = () => {
  return UAParser();
};
