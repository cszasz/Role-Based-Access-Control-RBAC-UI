
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-rbac-ui-manager.cjs.production.min.js')
} else {
  module.exports = require('./react-rbac-ui-manager.cjs.development.js')
}
