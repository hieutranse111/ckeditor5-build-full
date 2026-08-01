import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    environmentMatchGlobs: [['tests/smoke.test.ts', 'happy-dom']],
    typecheck: { include: ['tests/**/*.test-d.ts'] },
    exclude: ['**/node_modules/**', '**/dist/**', '.worktrees/**', '.claude/**']
  }
})
