/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var stylus = require('stylus');

module.exports = function(content, file, conf){
  var fn;
  stylus.render(content, function(err, css){
    if (err) throw err;
    fn = css;
  });
  return fn;
};
