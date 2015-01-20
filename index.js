'use strict'

var autoprefixer = require('autoprefixer-core')

module.exports = function(content, file, conf) {
    var processor = autoprefixer(conf)
    return processor.process(content, conf).css
}
