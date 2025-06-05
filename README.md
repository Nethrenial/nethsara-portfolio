# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Linting

Run ESLint to check for code quality issues:

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix
```

## Commit Conventions

This project uses [Conventional Commits](https://conventionalcommits.org/) with [Commitlint](https://commitlint.js.org/) and [Husky](https://typicode.github.io/husky/) to ensure consistent commit messages.

### Commit Message Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature for the user
- **fix**: A bug fix for the user
- **docs**: Documentation changes
- **style**: Code formatting (whitespace, semicolons, etc.) - no production code change
- **refactor**: Code refactoring - no new features or bug fixes
- **test**: Adding or updating tests - no production code change
- **chore**: Maintenance tasks, build updates - no production code change
- **perf**: Performance improvements
- **ci**: Changes to CI configuration and scripts
- **build**: Changes to build system or dependencies
- **revert**: Revert a previous commit
- **hotfix**: Critical fixes that need immediate attention

### Scopes

- **ui**: User interface changes
- **ux**: User experience improvements
- **components**: Component-related changes
- **pages**: Page-specific changes
- **assets**: Images, fonts, and other assets
- **styles**: CSS/styling changes
- **config**: Configuration file changes
- **deps**: Dependency updates
- **seo**: SEO-related changes
- **a11y**: Accessibility improvements
- **performance**: Performance optimizations
- **analytics**: Analytics implementation
- **layout**: Layout structure changes
- **content**: Content updates
- **meta**: Meta information updates
- **scripts**: Script changes
- **api**: API-related changes
- **deployment**: Deployment-related changes
- **responsive**: Responsive design changes

### Examples

```bash
# Good commit messages
git commit -m "feat(ui): add dark mode toggle component"
git commit -m "fix(pages): resolve mobile navigation overflow issue"
git commit -m "docs: update installation instructions"
git commit -m "style(components): format button component code"
git commit -m "refactor(api): simplify user authentication logic"
git commit -m "perf(assets): optimize image loading performance"
git commit -m "chore(deps): update nuxt to v3.17.5"

# With body and footer
git commit -m "feat(seo): implement structured data for blog posts

Add JSON-LD structured data to improve search engine visibility
and enable rich snippets for blog post pages.

Closes #123"
```

### Rules

- Header must be 72 characters or less
- Subject must be lowercase
- Subject must not end with a period
- Body and footer lines must be 100 characters or less
- Body must have a blank line before it
- Footer must have a blank line before it

### Git Hooks

This project uses Husky to run the following hooks:

- **pre-commit**: Runs ESLint to check code quality
- **commit-msg**: Validates commit message format using Commitlint

If your commit message doesn't follow the conventions, the commit will be rejected with an error message explaining what needs to be fixed.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
