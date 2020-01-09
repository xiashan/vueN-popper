# vueN-popper
> a vue component for complex popover, based on <a href="https://popper.js.org/">popper.js</a>

## Install

#### NPM

``` bash
npm install vuen-popper --save
```

#### Yarn

``` bash
yarn add vuen-popper
```

## Development Setup

``` bash
# install dependencies
yarn install

# start dev & debug
yarn docs:dev

# build dist files
yarn docs:build
```

## Props

| Props               | Type      | Default                                         | Description  |
| --------------------|:----------| ------------------------------------------------|--------------|
| disabled            | Boolean   | false                                           |   |
| append-to-body      | Boolean   | false                                           |   |
| visible-arrow       | Boolean   | true                                            |   |
| boundaries-selector | String    | null                                            |   |
| options             | Object    | { placement: 'bottom', gpuAcceleration: false } | [popper.js](https://popper.js.org/popper-documentation.html) options  |


## Events
| Name            | Params                   | Description  |
| ----------------|:-------------------------|--------------|
| created         | context[Object]          | Created popper component |
| show            |                          | Show popover |
| hide            |                          | Hide popover |
