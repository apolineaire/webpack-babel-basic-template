# Webpack 4 and Babel 7 simple template

This template allows to use ES modules, async/await and css imports based on an index.html template file.

Beware of the "special" config for `@babel/preset-env`. For generator functions and async/await to work, you need to specify :

```json
presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 'current'
                  }
                }
              ]
            ]
```
