module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: 0,
            features: {
                "nesting-rule": true
            }
        },
    }
  }