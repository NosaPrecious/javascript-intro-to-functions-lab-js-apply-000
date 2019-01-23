function shout(string){
  
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  return console.log(string.toUpperCase());
}

function logWhisper(string){
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var newVal= string;
  if(newVal.toLowerCase() === newVal){
    return 'I can\'t hear you!';
  }
}

  
  function sayHiToGrandma(string){
    var newVal= string;
    if(newVal === 'I love you, Grandma.'){
    return 'I love you, too.';
    }
  }