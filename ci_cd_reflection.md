# CI/CD Reflection

## What is the purpose of CI/CD?

CI/CD stands for Continuous Integration and Continuous Delivery/Deployment. The purpose is to automatically check, build, and prepare code changes so that new work can be merged and released more safely.

Continuous Integration means that whenever someone opens a pull request or pushes code, automated checks run on that change. This helps catch problems early, before they are merged into the main branch. Continuous Delivery/Deployment means that after the checks pass, the software can be released in a more consistent and repeatable way, instead of relying on someone to remember a long list of manual steps.

For this intern onboarding task, I set up a small CI pipeline that runs Markdown linting and spell checks on pull requests. That is only a small part of what a real CI/CD pipeline can do, but it shows the same idea: automate quality checks so the team does not have to remember to run them by hand every time.

## How does automating style checks improve project quality?

Automating style checks improves quality because the same rules are applied to every pull request, not just the files someone happens to notice during review. Markdown linting catches formatting issues such as broken heading structure, missing blank lines, or inconsistent lists. Spell checks catch typos before they end up in documentation that other people will read.

This also saves time in code review. Reviewers can focus on whether the change makes sense, instead of commenting on small style issues. It also helps when more than one person is writing documentation, because everyone follows the same standard.

Local Git hooks, such as Husky, are useful as a first line of defence. They can stop a commit on my machine before it even reaches GitHub. CI is still important, because Git hooks can be skipped and they only run on one person's computer. CI runs in a shared environment, so the whole team can trust the result.

## What are some challenges with enforcing checks in CI/CD?

One challenge is putting the workflow in the right place. GitHub Actions only runs files from `.github/workflows/` at the root of the repository. If the workflow is inside a subfolder, GitHub will not detect it, no checks will appear on the pull request, and it can look like CI is set up when it is not actually running.

Another challenge is making the checks strict enough to be useful, but not so strict that they fail on existing files or on words that are valid in this project. For example, names like Husky, Vite, or Focus Bear may be flagged as spelling mistakes unless they are added to a dictionary. `node_modules` also has to be ignored, otherwise the checks waste time on third-party files.

There is also a trade-off between local hooks and CI. Pre-commit hooks give faster feedback, but they can feel annoying if they are slow or if they fail for reasons that are hard to understand. If the team makes the checks too painful, people may try to skip them. CI should fail clearly and the config should be easy to update when a false positive appears.

## How do CI/CD pipelines differ between small projects and large teams?

In a small project, a CI pipeline can be simple. For this repository, it is enough to install dependencies and run Markdown linting plus a spell check on pull requests. There is usually one main branch, a small number of contributors, and no production deployment to worry about.

In a large team, the pipeline is usually much more complete. It may run unit tests, integration tests, type checks, security scans, and build the app on every pull request. Different jobs can run in parallel, and some checks may be required before merging. Continuous Delivery might deploy to a staging environment automatically, while production still needs approval. Continuous Deployment would go further and release automatically after all checks pass.

Large teams also need the pipeline to be reliable and fast, because many people depend on it every day. A broken or flaky check can block a lot of work. They often use branch protection rules, required reviewers, and clearer ownership of the workflow files. The idea is the same as in a small project, but the pipeline has to protect a much larger codebase and a much higher rate of change.
