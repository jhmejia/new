'use strict';

// var app = {

//   chars: ['coding', 'python', 'java', 'binary_search', 'c', 'sql', 'html', 'hash_table', 'c++', 'sorting', 'cpu_scheduling', 'binary_tree', 'o_n2', 'rust', 'graph', 'asm', 'stack', 'opencv', 'matlab', 'r', 'mysql', 'search', 'react', 'dynamic_programming', 'vue', 'jquery', 'docker', 'linked_list', 'node', 'express', 'django', 'flask', 'linux', 'spring_boot', 'heap', 'mongodb', 'redis', 'depth_first_search', 'docker', 'scikit_learn', 'armv8'],

//   init: function () {
//     app.container = document.createElement('div');
//     app.container.className = 'animation-container';
//     document.body.appendChild(app.container);
//     window.setInterval(app.add, 100);
//   },

//   add: function () {
//     var element = document.createElement('span');
//     app.container.appendChild(element);
//     app.animate(element);
//   },

//   animate: function (element) {
//     var character = app.chars[Math.floor(Math.random() * app.chars.length)];
//     var duration = Math.floor(Math.random() * 15) + 1;
//     var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
//     var size = 10 + (15 - duration);
//     var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
// element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s; color:'+color;
// element.innerHTML = character;
// window.setTimeout(app.remove, duration * 1000, element);
// },


//   remove: function (element) {
//     element.parentNode.removeChild(element);
//   },

// };

document.addEventListener('DOMContentLoaded', app.init);