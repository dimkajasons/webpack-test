import _ from 'lodash';
import toUpperCase from './mod/utils.js';
import css from './app.css'

var arr = ['a', 'b', 'c'].map(toUpperCase);

console.log(_.shuffle(arr));
document.querySelector('#content').innerHTML = arr;
