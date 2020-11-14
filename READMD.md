### create config/index.js under src folder

```
const baseConfig = {
  sqlConfig: {
    host: 'host',
    port: 5432,
    database: 'database',
    user: 'user',
    password: 'password',
  },
};

const config = {
  ...baseConfig,
};

module.exports = config;
```
