# Organization
- All application code will reside in the `/lib` directory.
- Use plugins to organize everything

## Plugins for Everything
I like to organize everything (business logic, routes, server extensions, etc.) into plugins. This makes the code easy to navigate and test. If your application grows beyond what can be contained in a single application, the plugins can be moved into separate repositories and maintained there.

### Services

The `lib/services` directory is used for plugins that are re-used across many parts of the application such as configuration and authentication.

#### Config
**Location:** [`/lib/services/config.js`](https://github.com/pon/hapi-skeleton/blob/master/lib/services/config.js)

**Purpose:** Use [nconf](https://github.com/indexzero/nconf) to combine environment variables with default config options. The config object can be accessed anywhere in the application via `server.plugins.config.app`.

**Example:**
```javascript
var env = server.plugins.config.app.get('NODE_ENV');
```

#### DB
**Location:** [`/lib/services/db.js`](https://github.com/pon/hapi-skeleton/blob/master/lib/services/db.js)

**Purpose:** Use [knex.js](http://knexjs.org/) to create a connection to a database. The config is exposed for testing purposes as well as the `knex` object for running queries.

**Example:**
```javascript
// Access knex config
var dbConfig = server.plugins.db.config;

// Access instantiated knex object to run database queries
var knex = server.plugins.db.knex;
```


#### Errors
**Location:** [`/lib/services/errors`](https://github.com/pon/hapi-skeleton/blob/master/lib/services/errors)

**Purpose:** Use [create-boom-error](https://github.com/lob/create-boom-error) to create [boom](https://github.com/hapijs/boom) errors that can be easily accessed and thrown to the API.

**Example:**
```javascript
throw new server.plugins.errors.api.ErrorName();
```

# Testing
The tests for the application reside in the `/test` directory. The structure of the directory mirrors the code in `/lib` and files are suffixed with `.test.js` rather than just `.js`. I am using [lab](https://github.com/hapijs/lab) for the testing framework and [code](https://github.com/hapijs/code) for the assertion library. The test suite can be run using `npm test`. I will be enforcing 100% code coverage on this repository.
