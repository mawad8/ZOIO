document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    loop: false,
    loopCount: Infinity,
   
  });

  
  document.querySelector('.yalla').addEventListener('mousemove', function() {
    toggleLoop(typed);
  });

});


 var typed2 = new Typed('#sp', {
    strings: [` Mohammad Awad `],
     
    typeSpeed: 120,
    backSpeed: 40,
    fadeOut: true,
    loop: true
  });

 var typed2 = new Typed('#bm', {
    strings: [` I was born and raised in Amman, Jordan. At 11 years old, I was fascinated by our family computer, but accidentally deleted everything including the windows. Through patience and curiosity I restored it all. My fascination became a passion to learn all about computers and the internet. I studied at Al Zaytoonah University and graduated with my B.S. in Computer Science. After that, I packed my bags and left my friends, family, country, and all I knew to pursue my dream of becoming a web developer in America. I am now based in Fremont and recently graduated from Codify Academy in San Francisco. I'm known for my keen eye and quick problem solving solutions. My nickname is "The Coder" and I'm ready to live up to my name in a professional setting. I love technology, tuna melts, and long walks to the computer. `],
     
    typeSpeed: 20,
    backSpeed: 40,
    fadeOut: true,
     // loop: true
  });

 
  // var typed2 = new Typed('#sp', {
  //   strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   fadeOut: true,
  //   loop: true
  // });
  // document.querySelector('.loop2').addEventListener('click', function() {
  //   toggleLoop(typed2);
  // });

//   new Typed('#typed3', {
//     strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
//     typeSpeed: 0,
//     backSpeed: 0,
//     smartBackspace: true,
//     loop: true
//   });

//   new Typed('#typed4', {
//     strings: ['Some strings without', 'Some HTML', 'Chars'],
//     typeSpeed: 0,
//     backSpeed: 0,
//     attr: 'placeholder',
//     bindInputFocusEvents: true,
//     loop: true
//   });

//   new Typed('#typed5', {
//     strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
//     typeSpeed: 0,
//     backSpeed: 0,
//     shuffle: true,
//     cursorChar: '_',
//     smartBackspace: false,
//     loop: true
//   });

//   new Typed('#typed6', {
//     strings: ['npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'],
//     typeSpeed: 40,
//     backSpeed: 0,
//     loop: true
//   });

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

// function toggleLoop(typed) {
//   if (typed.loop) {
//     typed.loop = false;
//   } else {
//     typed.loop = true;
//   }
// }