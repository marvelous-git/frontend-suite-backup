# Frontend Suite

This project was generated using [Nx](https://nx.dev) and it is based on the Angular UI Library called [Nebular](https://akveo.github.io/nebular). Nebular is a customizable UI Library based on Eva Design System specifications, with 40+ UI components, 4 visual themes, Auth and Security modules.


## Generate Angular Application

Run `nx generate @nrwl/angular:application --name=starter-web --style=scss --routing --tags=scope:shared,platform:web,type:app` to generate an application.

> Replace "starter-web" with the name of your application without quotes.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@frontend-suite/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.


