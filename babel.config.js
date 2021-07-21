module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // "modules": false,
        targets: {
          node: '10',
        },
        // corejs: 3,
        // useBuiltIns: "usage",
      },
    ],
    ['@babel/preset-typescript'],
  ],
};
