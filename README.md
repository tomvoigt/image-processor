# Image Processing API

## Quick start

- Run `npm start` to quickly start the local development server. This will refresh on every change to the source code.
- Run `npm run format` to format the codebase with Prettier.
- Run `npm run lint` to lint the code with ESLint.
- Run `npm test` to test the source code with Jasmine and Supertest.
- Run `npm run build` to transpile Typescript to Javascript.

## Project structure

- `.husky` includes the existing and newly created Git hooks that are run with Husky.
- `public` includes the static files that are will be exposed to the client after resizing. An `output` folder will be created when processed images need to be stored.
- `src` includes all of the source code and tests in Typescript.

In order to allow for the application to scale easily, the following structure has been set up for the source code:

- `middleware` includes all of the Express middlewares that can be used to compose endpoints.
- `router` includes the `Router` object to which endpoints can be added. New API roots should be added to the `Router`.
- `routes` includes all of the HTTP endpoints of the application.
- `utilities` includes any utilities that are shared in different modules in the application.

> Spec files for tests are to be added in the same folder as the unit to be tested. This is to make sure we do not have to manage mimicking the project structure in a seperate tests folder and will make it easier to manage single modules in the application.

> A `dist` folder will be created when building the project. This folder includes all of the transpiled Javascript and can be used to deploy anywhere and run with Node.

## Endpoints

- `/api/resize` accepts the following query parameters: `filename`, `width` and `size`.

## Sources

For the creation of this project, the following resources were used:

- Udacity training programme.
- [Typescript docs](https://www.typescriptlang.org/) for references to TSConfig
- [Express docs](https://expressjs.com/) for references to structure, endpoints, middleware.
- [Supertest docs](https://www.npmjs.com/package/supertest) for examples to set up the HTTP endpoint tests.
- [ESLint Getting Started guide](https://eslint.org/docs/latest/user-guide/getting-started) to set up ESLint
- [Prettier docs](https://prettier.io/docs/en/precommit.html) to set up Prettier with Husky and Lint staged to enable pre-commit hooks.
- [Jasmine Tutorial](https://jasmine.github.io/tutorials/your_first_suite) to get started with Jasmine test setup.
