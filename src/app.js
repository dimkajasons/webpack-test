import _ from 'lodash';
import toUpperCase from './mod/utils.js';
var arr = ['a', 'b', 'c'].map(toUpperCase);

console.log(_.shuffle(arr));
