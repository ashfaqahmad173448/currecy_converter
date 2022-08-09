module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@config': './src/config',
          '@assets': './assets',
          '@redux': './src/redux',
          '@common': './src/common',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
