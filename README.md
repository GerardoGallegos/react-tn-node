# React-tn-note
[![Build Status](https://travis-ci.org/GerardoGallegos/react-tn-note.svg?branch=master)](https://travis-ci.org/GerardoGallegos/react-tn-note)

## Usage
- ```npm i react-tn-note```
- ```npm i styled-components```

## Dev Dependencies
* rollup
* babel
* size-limit
* standard
* jest

## Peer Dependencies
* react
* react-dom
* prop-types
* styled-components

## Prop Types

Prop Name          | Type      | Default    | Description |
------------------ | --------- | ---------- | ----------- |
note               | Object    | { }        | Object Note { text: '', createdAt: '' } |
username           | String    | ""         | User name   |
avatar             | Strign    | ""         | The image's source of avatar  |
onChange           | Function  | noop       | Is trigger when the changes are acepted |
onDelete           | Function  | noop       | Is trigger when the user press delete button |

## Comands

#### npm start
#### npm run build
#### npm run size
#### npm run test
#### npm run test:w

--------

This component uses Standard JS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)