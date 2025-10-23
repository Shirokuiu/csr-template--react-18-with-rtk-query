import { getDeviceInfo } from './getDeviceInfo';

export type PlatformType = 'ios' | 'android' | 'desktop';

export const getPlatform = (): PlatformType => {
  if (typeof window === 'undefined') return 'desktop';

  const { os } = getDeviceInfo();

  if (!os || !os.name) return 'desktop';

  const osName = os.name.toLowerCase();

  if (osName.includes('ios')) {
    return 'ios';
  }

  if (osName.includes('android')) {
    return 'android';
  }

  return 'desktop';
};
