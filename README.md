# Purplship Node.js Library

Purplship is a Multi-carrier Shipping API that simplifies the integration of logistic carrier services.

Visit [next.purplship.com](https://next.purplship.com) to deploy your private cloud multi-carrier shipping API.

## Documentation

See the full [Node API docs](https://next.purplship.com/docs/reference).

## Installation

Install using [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/)

```bash
npm i purplship
# or 
yarn add purplship
```

## Usage

The package needs to be configured with your account's API key, which is available in the Purplship Dashboard.

```javascript
const { Purplship } = require('purplship');
const purplship = Purplship('API_KEY', 'https://instance.purplship.api');

purplship.carriers.list({})
    .then(carriers => console.log(carriers))
    .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```javascript
import { Purplship } from 'purplship';
const purplship = Purplship('API_KEY', 'https://instance.purplship.api');

(async () => {
  const carriers = await purplship.carriers.list({});

  console.log(carriers);
})();
```

## Author

Team purplship | hello@purplship.com | [purplship.com](https://purplship.com)
Daniel K | danielk.developer@gmail.com | [danielk.xyz](https://danielk.xyz)
