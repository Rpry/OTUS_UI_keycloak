# Keycloak React.JS Demo

Demo and reference implementation for React.JS and Keycloak IAM & SSO integration.

With this approach, there's no need for 3rd party dependencies (besides the official default `keycloak-js` lib) and custom components base on auth state are implemented with ease and best developer experience.


## Prerequisites

- based on React version >= 18 and Vite
- uses React Router v6
- Keycloak server should be a most recent one

## !!! Important Notice !!!

> **This demo is just for showing one possibility on how to configure the app when using Keycloak and it requires a certain knowledge about Keycloak SSO (installation, operation, configuration), see http://www.keycloak.org.**

## Backend service

For convenience, I provide a working backend service, providing the data, running on AWS Lambda.
It should work and be available out of the box.
