/*
Practice session for Javascript.
Understanding Synchronous vs Asynchronous JavaScript https://www.youtube.com/watch?v=Q-Zmc0E0GYY
Async-await https://www.youtube.com/watch?v=lGJbPSI-12E
Callback Functions and How Do They Work? https://www.youtube.com/watch?v=uPCxgnLOuiQ
Intro to Web Workers - https://www.youtube.com/watch?v=EiPytIxrZtU
*/

let log = console.log;

dothings();

async function dothings() {
  let p = await delay(1000);
  if(p) {
    log(p);
  } else {
    log('undefined');
  }
}

function delay(ms) {
  return new Promise((resolve, reject) => { 
    // resolve(ms);
    reject(new Error('bad things happened'))
    // return 10; 
  }).catch((err) => log('err' + err.message));
}

// Callback

const app = {
  geoLocation: (s, f) => { 
    try {
      let pos = {
        lattitude: 0,
        longitude: 0
      };
      pos.lattitude = 123;
      pos.longitude = 345;
      if(false) {
        throw new Error('something bad has happened');
      } else {
        s.call(app.geoLocation, pos);
      }
    } catch(err) {
      f.call(app.geoLocation, err);
    }

  }
}
const success = (position) => {
  log(`You are at position (${position.lattitude}, ${position.longitude})`);
};
const fail = (err) => {
  log('something bad happended', err.message);
};

app.geoLocation(success, fail);

/*****************/
let worker;

function init() {
  worker = new Worker('filename.js');
  /* 
  cannot interact with dom
  but can do settimeout, play with navigator etc.
  addEventListener and postMessage are 2 main methods of interation.
  these 2 methods go in web file and wokder file as well.
  They help these 2 interact with each other.
  postmessage is used for communication and can set objects, strings etc...

  */
}



// const A = new Promise((resolve, reject) => {});

// const A = new Promise(function(resolve, reject){
//   // do something...
//   let isClean = true;
//   if(isClean)
//     resolve('Clean');
//   else 
//     reject('Not clean');
// });


// A.then(function(fromResolve) {
//   console.log('cleaned room');
// }).catch(function(fromReject){
//   console.log('not cleaned');
// })


let A = function(){
  return new Promise(function(resolve, reject){
    resolve('cleaned room');
  });
}

let B = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' garbage done');
  });
}

let C = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' get sweet');
  });
}

// A().then(function(result){
//   return B(result);
// }).then(function(result){
//   return C(result);
// }).then(function(result){
//   console.log('finished ' + result);
// });

Promise.all([A(), B(), C()]).then(function(){
  console.log('All is done');
})


Promise.race([A(), B(), C()]).then(function(){
  console.log('One of them is finished');
})

