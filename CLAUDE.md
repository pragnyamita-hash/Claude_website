# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

## Repository Overview

**Project:** Claude_website
**Repository:** pragnyamita-hash/Claude_website
**Status:** Early-stage / initial setup — the project currently contains only a README.

This is a website project. As the codebase grows, this file should be updated to reflect the actual stack, conventions, and workflows in use.

---

## Current Repository Structure

```
Claude_website/
├── README.md       # Project title only — expand as the project grows
└── CLAUDE.md       # This file
```

---

## Development Workflow

### Branching Strategy

- **Default branch:** `master`
- **Feature/AI branches:** Must follow the pattern `claude/<description>-<session-id>`
- Always develop on the designated branch. Never push to `master` directly without review.

### Git Conventions

- Commit messages should be clear and imperative (e.g., "Add homepage layout", "Fix navigation link").
- Keep commits focused — one logical change per commit.
- Always push with tracking: `git push -u origin <branch-name>`

### Before Committing

- Do not commit secrets, `.env` files, credentials, or large binaries.
- Stage specific files rather than using `git add -A` blindly.

---

## Code Conventions (to be expanded as the stack is decided)

When the tech stack is established, document the following here:

- **Language/framework:** (e.g., Next.js, plain HTML/CSS/JS, React, etc.)
- **Package manager:** (e.g., npm, pnpm, yarn)
- **Styling approach:** (e.g., Tailwind CSS, CSS modules, styled-components)
- **Linting/formatting:** (e.g., ESLint, Prettier — include config file locations)
- **Testing framework:** (e.g., Jest, Vitest, Playwright)

### General Principles

- Prefer editing existing files over creating new ones.
- Keep solutions minimal — avoid over-engineering or adding features not explicitly requested.
- Do not add comments, docstrings, or type annotations to code you did not change.
- Remove unused code completely instead of leaving it commented out.
- Validate only at system boundaries (user input, external APIs); trust internal code.

---

## Commands (to be filled in once the stack is set up)

```bash
# Install dependencies
# npm install  (or pnpm install / yarn)

# Start development server
# npm run dev

# Run tests
# npm test

# Lint
# npm run lint

# Build for production
# npm run build
```

---

## AI Assistant Instructions

- **Read files before modifying them.** Never propose changes to code you haven't read.
- **Follow the branching rules above.** All AI-driven work must land on the designated `claude/...` branch.
- **Do not push to `master`** without explicit user permission.
- **Keep this file up to date.** When you add a new tool, dependency, or convention to the project, update the relevant section of this file.
- **Avoid backwards-compatibility hacks** — if something is removed, delete it completely.
- **No time estimates** in comments, commit messages, or documentation.

---

## Updating This File

As the project evolves, keep the following sections current:

1. **Repository Structure** — update the directory tree whenever significant files/folders are added.
2. **Commands** — fill in real commands once `package.json` (or equivalent) exists.
3. **Code Conventions** — document the chosen stack, linter config, and formatting rules.
4. **Testing** — document how to run tests and where test files live.
