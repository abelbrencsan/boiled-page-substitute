# Boiled Page substitute script

A simple JavaScript function for Boiled Page frontend framework to substitute placeholders for given values in a string. It can be used as a simple templating engine.

## Install

Place `substitute.js` to `/assets/js` directory and add its path to `scripts` variable in `gulpfile.js` to be combined with other scripts.

## Usage

To substitute placeholders for given values in a string, call `substitute()` method the following way:

```js
// Substitute
substitute(template, map, formatters);
```

Option| Type | Required | Description
------|------|----------|------------
`template` | String | Yes | String where placeholders start with `${` and end with `}`.
`map` | Object | No | Object where keys refer to placeholders which will be substituted for given values.
`formatters` | Object | No | Object that contains optional formatters to manipulate output of substitution.

## Examples

### Example 1
```js
var template = 'Hello ${name:uppercase}';
var map = {
  name: 'John'
};
var formatters = {
  uppercase: function(value, key) {
    return value.toUpperCase();
  }
};
var output = substitute(template, map, formatters);
```