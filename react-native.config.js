module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
  assets: ['./assets/fonts/'],
};
