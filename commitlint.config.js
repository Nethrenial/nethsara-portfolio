export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature for the user
        'fix', // Bug fix for the user
        'docs', // Changes to the documentation
        'style', // Formatting, missing semi colons, etc; no production code change
        'refactor', // Refactoring production code, eg. renaming a variable
        'test', // Adding missing tests, refactoring tests; no production code change
        'chore', // Updating grunt tasks etc; no production code change
        'perf', // Performance improvements
        'ci', // Changes to CI configuration files and scripts
        'build', // Changes that affect the build system or external dependencies
        'revert', // Revert a previous commit
        'hotfix', // Critical hotfix
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'ui', // User interface changes
        'ux', // User experience changes
        'components', // Component-related changes
        'pages', // Page-related changes
        'assets', // Asset-related changes (images, fonts, etc.)
        'styles', // Styling changes
        'config', // Configuration changes
        'deps', // Dependency changes
        'seo', // SEO-related changes
        'a11y', // Accessibility improvements
        'performance', // Performance optimizations
        'analytics', // Analytics implementation
        'layout', // Layout changes
        'content', // Content updates
        'meta', // Meta information updates
        'scripts', // Script changes
        'api', // API related changes
        'deployment', // Deployment related changes
        'responsive', // Responsive design changes
        'docs', // Documentation changes
        'cursor', // Cursor rules changes
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
}
