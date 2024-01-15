__This repository has been archived but the karrio docs have been moved to a monorepo https://github.com/karrioapi/karrio__ 


# Karrio Node/JS/TS Library

Karrio is a universal Shipping API that simplifies the integration of logistic carrier services.

Visit [karrio.io](https://karrio.io) to deploy your private cloud multi-carrier shipping API.

## Documentation

See the full [Node API docs](https://docs.karrio.io/reference).

## Installation

Install using [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/)

```bash
npm i karrio
# or 
yarn add karrio
```

## Usage

The package needs to be configured with your account's API key, which is available in the Karrio Dashboard.

```javascript
const karrio = require('karrio')('key_...', 'https://api.karrio.io');

karrio.carriers.list()
    .then(carriers => console.log(carriers))
    .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```javascript
import Karrio from 'karrio';
const karrio = Karrio('key_...', 'https://api.karrio.io');

(async () => {
  const carriers = await karrio.carriers.list();

  console.log(carriers);
})();
```

## Author

Team Karrio | hello@karrio.io | [karrio.io](https://karrio.io)
