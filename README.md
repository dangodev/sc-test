# Styled Components test

When using variables in Styled Components, they’re stripped out in the build.

See https://github.com/styled-components/styled-components/issues/1607.


## Reproduction

1. Navigate to [App.js](https://github.com/dangodev/sc-test/blob/master/src/App.js#L6) to see the styled component setup.
2. Run `yarn build`
3. Inspect the built JS file to find `background-color: ",";\n  color: ","` rather than the expected values.
