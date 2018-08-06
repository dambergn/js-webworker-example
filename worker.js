'use strict';

console.log('web worker loaded?')

this.onmessage = function(e){
  // const work = e.data;
  let testResult = 0;
  for (let i = 0; i < 1000000 * 100; i++) {
    let results = Math.random() * Math.random() * Math.random() / Math.random();
    testResult = testResult + results;
  }
  this.postMessage(testResult);
};