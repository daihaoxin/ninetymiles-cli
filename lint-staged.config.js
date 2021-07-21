module.exports = {
  '**/*.{ts,tsx}': ['eslint --fix'],
  '**/*.*': ['npm run prettier:fix'],
};
