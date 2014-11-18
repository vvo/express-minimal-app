// See all options here:
// http://www.browsersync.io/docs/options/
module.exports = {
  'files': [
    'public/**',
  ],
  'server': false,
  'proxy': 'localhost:8081',
  'port': 4000,
  'ghostMode': {
    'clicks': true,
    'scroll': true,
    'location': false,
    'forms': {
      'submit': true,
      'inputs': true,
      'toggles': true
    }
  },
  'logLevel': 'info',
  'logPrefix': 'BS',
  'logConnections': false,
  'logFileChanges': true,
  'logSnippet': true,
  'open': false,
  'browser': 'default',
  'xip': false,
  'hostnameSuffix': false,
  'notify': true,
  'scrollProportionally': true,
  'scrollThrottle': 0,
  'reloadDelay': 0,
  'injectChanges': true,
  'startPath': null,
  'minify': false,
  'host': null,
  'codeSync': true,
  'timestamps': true,
  'socket': {
    'path': '/browser-sync/socket.io',
    'clientPath': '/browser-sync',
    'namespace': '/browser-sync'
  },
  'debugInfo': true
};
