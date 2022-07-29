# cactus-data

This script is to process the data from CACTUS project website

## Prepare

Download the latest JSON file from CACTUS website [here](http://cactuscosting.com/cactus/admin_index.php)

## Usage

- Install NPM packages

```zsh
npm i
```

- build packages

```zsh
npm run build
```

- development

```zsh
npm run watch
node dist/index.js data/all_cactus_datapoint_data.json -o data.csv
```
