# myapp

Basic expressjs app with:
- nodejs production best practices built-in
- serious logging
- sufficient configuration system
- dev tools (browser-sync, automatic server reload, lint)

## development

```shell
npm run dev
```

Go to http://localhost:4000

## production

```shell
APP_ENV=production npm start
```

## lint

```shell
npm run lint
```

## installing/removing/upgrading dependencies

We lock dependencies using [shrinkwrap](https://www.npmjs.org/doc/cli/npm-shrinkwrap.html), good or bad.

```shell
npm install dep@version --save[-dev]
npm remove dep --save[-dev]
npm shrinkwrap
```
