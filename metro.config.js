const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
    wrapWithReanimatedMetroConfig,
  } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Custom configuration (if needed)
const customConfig = {
  // Add your custom Metro configurations here if any
};

// Merge and wrap with Reanimated
const config = wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, customConfig));

module.exports = config;
