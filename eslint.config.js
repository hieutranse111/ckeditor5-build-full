import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist/**', 'demo/dist/**', 'node_modules/**', '.worktrees/**'] },
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  },
  {
    // See src/ckeditor-modules.d.ts for why inline import() is required there.
    files: ['src/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'off'
    }
  }
)
