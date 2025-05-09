# Extended Page Object Model Example

This repository is an implementation example of the Extended Page Object Model, a design pattern for end-to-end testing. It includes test code that applies the pattern, as well as a Docker Compose file for [OpenProject](https://www.openproject.org/), which serves as the test target. For a detailed explanation of the Extended Page Object Model, please refer to the [Project Au Lait blog article](https://dev.to/project_au_lait/design-pattern-for-playwright-end-to-end-testing-1idc).

## Required Software

The following software is required to run the test code in this repository:

- Docker
- Node.js
- pnpm (optional)

The type of Node.js package manager is optional, but the setup commands are written assuming the use of pnpm. If you use a different package manager, please adjust the commands accordingly.

## Setting Up the Environment

To set up the environment for running the test code, execute the following commands:

```sh
git clone https://github.com/project-au-lait/ext-page-object-model-example.git
cd ext-page-object-model-example

docker compose up -d --wait
pnpm i
pnpm playwright install
pnpm playwright test first-login --headed
```

After running the commands, you can log in to OpenProject at URL: http://localhost:8080 with username: `admin` and password: `newadminpass`.

## Running Tests

An example test scenario is implemented in `tests/task.spec.ts`. To execute this scenario, run:

```sh
pnpm playwright test task.spec.ts --headed --trace on
```

You can view the results of the above test run in the report below:

* [Playwright Report + Trace Viewer](https://aulait.dev/ext-page-object-model-example/en/)

For details on how to run Playwright tests, refer to the [official documentation](https://playwright.dev/docs/running-tests).

To run the scenario in Dry Run mode, use:

```sh
pnpm dry-run task.spec.ts
```

[[日本語](README_ja.md)]