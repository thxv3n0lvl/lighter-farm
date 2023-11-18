<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A lighter <a href="https://github.com/LiteFarmOrg/LiteFarm" target="_blank">LiteFarm</a> spinoff built with NestJs and the Hexagonal Architecture.</p>
    <p align="center">

## Description

This repo is not an official LiteFarm project but a personal migration to use a different set of tools and demostrate how cute the Hexagonal Architecture looks when it's used with NestJs and TypeScript.

## Objectives

- use Hexagonal Architecture and Ports and Adapters
- use NestJs / TypeScript
- reduce the amount of endpoints than the original project
- create a structured DB with standardized set of practices throughout its assets 
- generate unit and component tests with enough functional coverage 

## Out of scope 
- a 1:1 migration from the actual LiteFarm backend but a rewrite version using different practices and tools 
- make it useful with the frontend 



## Installation

```bash
# spin up the DB using docker
$ docker compose up  
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation
Documentation is generated through Swagger, first run locally the project and then go to `http://localhost:<port>/api`

## Support
Please give some love and support to [LiteFarm project](https://github.com/LiteFarmOrg/LiteFarm)

## Stay in touch

- Author - [Alan Trevino](mailto:thxv3n0lvl@pm.me)

## License

lighter-farm is [MIT licensed](LICENSE).
