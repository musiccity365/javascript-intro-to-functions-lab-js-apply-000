function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = 'hello!'
  
  var mixedCase = 'Hi there!'
  
  if(lowercase.toLowerCase() === lowercase) {
    return string;
  }// true
 
  else(mixedCase.toLowerCase() === mixedCase){
    return false
  } // false
}