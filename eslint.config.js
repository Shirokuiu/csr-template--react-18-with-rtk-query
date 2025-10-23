import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  // Базовые пресеты
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      prettier,
      '@typescript-eslint': tseslint.plugin,
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {} },
    },

    ignores: [
      '**/*.css',
      '**/*.svg',
      '**/*.test.ts',
      '**/*.test.tsx',
      'node_modules/**',
      'dist/**',
      'build/**',
    ],

    rules: {
      'no-console': 'error',
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'no-use-before-define': 'off',
      'react/jsx-props-no-spreading': 'warn',
      '@typescript-eslint/no-use-before-define': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'max-len': [
        'warn',
        {
          code: 180,
          ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
          ignoreUrls: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/prefer-default-export': 'off',
      'react/prop-types': 'off',
      'react/button-has-type': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-param-reassign': 0,
      'react/require-default-props': 'off',
      'jsx-a11y/label-has-associated-control': ['error', { required: { some: ['nesting', 'id'] } }],
      'jsx-a11y/label-has-for': ['error', { required: { some: ['nesting', 'id'] } }],
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'prettier/prettier': 'error',
      'no-undef': 'off',
    },
  },
);
