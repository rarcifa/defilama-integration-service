# Protocol Example Service

![Coverage Badge](https://img.shields.io/badge/Coverage-83-green)
![Version Badge](https://img.shields.io/badge/Version-v1.0.1-blue)

This repository contains a protocol example service.

### Local setup

- This local setup is provided as is
- In order to run the formatter with `vscode`, the prettier extension needs to be installed
- After installing the extension, add the following `json` to your `.vscode/settings.json` file:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "jest.jestCommandLine": "npm run test --",
  "jest.autoRun": "off"
}
```

- You need to generate an API key and a Secret key by using the helper functions provided in the example.

- In order to have the local environment variables set up, add the following `.env` file in the root of the project:

```
DEFILAMA_BASE_API=https://api.llama.fi
MONGODB_DEV=YOUR_MONGO_DB_URI
READ_API_KEY=YOUR_READ_API_KEY
READ_API_SECRET=YOUR_READ_API_SECRET
WRITE_API_KEY=YOUR_CRONOS_DAPP_WRITE_API_KEY/68zAyBQ=
WRITE_API_SECRET=YPUR_WRITE_API_SECRET
JEST_TEST_API_KEY=YOUR_JEST_TEST_API_KEY
JEST_TEST_SECRET_KEY=YOUR_JEST_TEST_API_KEY
HOST=localhost
```

- Finally, to install all the dependencies, run the following:

```bash
npm install
```

### Database setup

install mongodb community edition and start the database locally.

### Running the service

- In order to run the service locally, after all the steps, run the following command:

```bash
npm run dev
```

### Links of interest

- [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
