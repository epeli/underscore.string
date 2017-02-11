var equal = require('assert').equal;
var sformat = require('../sformat');

test('#sformat', function(){
  equal(sformat('{0}'), '', 'missing');
  equal(sformat('{0}', 'single'), 'single', 'single');
  equal(sformat('{0} {0}', 'double'), 'double double', 'double');
  equal(sformat('{{0}}', 'unchanged'), '{0}', 'unchanged');
  equal(sformat('{{{0}}}', 'enclosed'), '{enclosed}', 'enclosed');
  equal(sformat('{0} {1}', 'first', 'second'), 'first second', 'ordered');
  equal(sformat('{1} {0}', 'second', 'first'), 'first second', 'reversed');
  equal(sformat('{0}', 1), '1', 'non-string');
});
