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
 
  if(lowercase.toLowerCase() === lowercase) // true
 
  var mixedCase = 'Hi there!'
 
  mixedCase.toLowerCase() === mixedCase // false
 
  return string.toLowerCase()
}