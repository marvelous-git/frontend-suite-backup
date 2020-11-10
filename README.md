# Frontend Suite

This project was generated using [Nx](https://nx.dev) and it is based on the Angular UI Library called [Nebular](https://akveo.github.io/nebular). Nebular is a customizable UI Library based on Eva Design System specifications, with 40+ UI components, 4 visual themes, Auth and Security modules.


## Generate Angular Application

Run `nx generate @nrwl/angular:application --name=starter-web --style=scss --routing --tags=scope:shared,platform:web,type:app` to generate an application.

> Replace "starter-web" with the name of your application without quotes.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Changing Nebular theme

Nebular comes with 4 visual themes right out of the box. The themes currently available are: 
1. default
1. corporate
1. cosmic & 
1. dark

This project makes it easier to switch between different themes. There are two places you need to edit to change/enable a theme. First you need set the theme name in the `environment.ts` file and then add the appropriate styling in the `workspace.json` file.

### Example

> In the `environment.ts` file, set the theme to dark to enable the dark theme.

```
import { baseEnvironment } from './base.environment';

export const environment = {
  ...baseEnvironment,
  production: false,
  nebular: {
    theme: 'default',
    ...
  },
};
```

> In the `workspace.json` file, add your css styling.

```
"styles": [
  "node_modules/@nebular/theme/styles/prebuilt/dark.css",
  ...
],
```

Note that themes are configured per application.

## Generate a library

Run `npm run workspace-schematic feature` and provide the required information as prompted to generate a library.


Libraries are sharable across libraries and applications. They can be imported from `@frontend-suite/`.

## Development server

Run `nx serve starter-web` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

>Replace `starter-web` with the name of your application.

## Code scaffolding

This project follows a container presenter design pattern.

### Generating a Smart Component
Run `nx generate @schematics/angular:component --name=containers/my-component --project=my-app --style=scss` to generate a new smart component.

### Generating a Dumb Component
Run `nx generate @schematics/angular:component --name=components/my-component --project=my-app --style=scss` to generate a new presentational component.

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


