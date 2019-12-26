# vueN-popper
> a vue component for complex popover, based on <a href="https://popper.js.org/">popper.js</a>

## Install

#### NPM

``` bash
npm install vue-popperjs --save
```

#### Yarn

``` bash
yarn add vue-popperjs
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
| delay-on-mouse-over | Number    | 10                                              | Delay in ms before showing popper during a mouse over |
| delay-on-mouse-out  | Number    | 10                                              | Delay in ms before hiding popper during a mouse out |
| append-to-body      | Boolean   | false                                           |   |
| visible-arrow       | Boolean   | true                                            |   |
| force-show          | Boolean   | false                                           |   |
| trigger             | String    | hover                                           | Optional value: <br><ul><li>**hover** - hover to open popper content</li><li>**clickToOpen** - every click on the popper triggers open, only clicking outside of the popper closes it</li><li>**clickToToggle** - click on the popper toggles it's visibility</li><li>**click** (deprecated - same as **clickToToggle**)</li><li>**focus** - opens popper on focus event, closes on blur.</li> |
| content             | String    | null                                            |   |
| enter-active-class  | String    | null                                            |   |
| leave-active-class  | String    | null                                            |   |
| boundaries-selector | String    | null                                            |   |
| transition          | String    | empty                                           |   |
| options             | Object    | { placement: 'bottom', gpuAcceleration: false } | [popper.js](https://popper.js.org/popper-documentation.html) options  |
| data-value          | Any       | null                                            | data of popper  |
| stop-propagation    | Boolean   | false                                           |  |
| prevent-default     | Boolean   | false                                           |  |
| root-class          | String    | empty                                           | Class name for root element |


## Events
| Name            | Params                   | Description  |
| ----------------|:-------------------------|--------------|
| created         | context[Object]          | Created popper component |
| show            |                          | Show popover |
| hide            |                          | Hide popover |
| document-click  |                          | |
