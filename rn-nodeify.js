// rn-nodeify.js
const nodeify = require('nodeify');

// Add shims for Node.js modules that are not available in React Native
const shims = {
  crypto: require.resolve('react-native-crypto'),
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer/'),
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),
  path: require.resolve('path-browserify'),
  os: require.resolve('os-browserify/browser'),
  vm: require.resolve('vm-browserify'),
  assert: require.resolve('assert/'),
  process: require.resolve('process/browser'),
  util: require.resolve('util/'),
  tty: require.resolve('tty-browserify'),
  punycode: require.resolve('punycode/'),
  domain: require.resolve('domain-browser'),
  constants: require.resolve('constants-browserify'),
  zlib: require.resolve('browserify-zlib'),
};

// Enable nodeify shims for React Native
nodeify({
  insertGlobalVars: {
    process: () => {},
    Buffer: () => {},
  },
  // Add shims for Node.js modules that are not available in React Native
  ...shims,
});
