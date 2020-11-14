### create config/index.js under src folder

```
const nodeEnv = process.env.NODE_ENV || 'dev';

const baseConfig = {
  sqlConfig: {
    host: 'localhost',
    port: 5432,
    database: 'database',
    user: 'user',
    password: 'password',
  },
};

const testConfig = {
  ...baseConfig,
  sqlConfig: {
    host: 'localhost',
    port: 5432,
    database: 'database-test',
    user: 'user',
    password: 'password',
  },
};

const devConfig = {};

module.exports = {
  test: {
    ...baseConfig,
    ...testConfig,
  },
  dev: {
    ...baseConfig,
    ...devConfig,
  },
}[nodeEnv];
```
