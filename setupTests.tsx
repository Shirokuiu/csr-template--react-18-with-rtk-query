import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

// Очищаем DOM после каждого теста
afterEach(() => {
  cleanup();
});

// Заглушка для SVG-файлов, чтобы Vitest не пытался парсить XML
vi.mock('*.svg', () => ({
  default: 'svg-mock',
}));

// Заглушка для SVG-спрайта, чтобы Vitest не пытался парсить XML
vi.mock('src/assets/sprites/_sprite.svg?react', () => ({
  default: () => <div data-testid="sprite-mock" />,
}));
