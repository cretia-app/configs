# Cretia Configs

## ESLint

### Install

```bash
npm install --development eslint eslint-config-cretia
```

### Use

There are two ways to load this configuration:

- Inside your package.json

```json
"eslint": {
  "extends": "eslint-config-cretia"
}
```

- Use a config file `.eslintrc`

```json
{
	"extends": "eslint-config-cretia"
}
```

## Prettier

### Install

```bash
npm install --development prettier prettier-config-cretia
```

### Use

There are two ways to load this configuration:

- Inside your package.json

```json
"prettier": "@cretia/prettier-config"
```

- Use a config file `.prettierrc`

```json
"@cretia/prettier-config"
```
