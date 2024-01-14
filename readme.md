# typescript-template

## ENV

| Name      | Description          | Default       |
| --------- | -------------------- | ------------- |
| LOG_LEVEL | logging level        | debug         |
| NODE_ENV  | environment variable | production    |
| TZ        | timezone             | Europe/Moscow |

## Build

Download the dependencies:

```bash
npm ci
```

To run compile the Typescript:

```bash
npm run build
```

Remove dependencies for development:

```bash
npm ci --omit=dev
```

To run the application:

```bash
npm run start
```
