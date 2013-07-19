/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var stylus = require('stylus');

module.exports = function(content, file, conf){
  stylus.render(function(err, css){
    if (err) throw err;
    consoloe.log(css);
    return css;
  });
};
