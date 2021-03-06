/* LITERALS */
function makeEmptyObject(){
  return {};
}

/* NEW OBJECT */
function makeEmptyObjectNew(){
  return new Object();
}

/* KEY VALUE PAIRS */
function makeFirstObject(){
  return {
    keyOnTheLeft: "Value on the right"
  }
}

function makeNumberObject(){
  return {
    numberKey: 9001
  }
}

function makeStringObject(){
  return {
    stringKey: "We are the champions"
  }
}

function makeBooleanObject(){
  return {
    booleanKey: true
  }
}

function makeObjectObject(){
  return {
    objectKey: {
      text: "This works"
    }
  }
}

function makeArrayObject(){
  return {
    arrayKey: [1,2,3]
  }
}

function makeFunctionObject(){
  return {
    sayHi: function() {
      return "Hi";
    }
  }
}

function makeObjception(){
  return {
    objectKey: {
      inceptionLevel1: {
        inceptionLevel2: {
          inceptionLevel3: "Objception Complete!"
        }
      }
    }
  }
}

function makeMultikeyObject(){
  return {
    prop1: "So beaucoup",
    prop2: "So mucho",
    prop3: 'So many'
  }
}

/* DOT PROPERTY */
function returnUrlProperty(obj){
  return obj.url;
}

function returnSubdomainUserCount(obj) {
  return obj.subdomain.userCount;
}

function getUserCount(obj){
  return obj.userCount;
}

function setUserCount(obj){
  obj.userCount = 7;
}

/* SQUARE BRACKET NOTATION */
function returnUrlPropertySquare(obj){
  return obj['url'];
}

function returnSubdomainUserCountSquare(obj){
  return obj.subdomain['userCount'];
}

function getUserCountSquare(obj){
  return obj['userCount'];
}

function setUserCountSquare(obj){
  obj['userCount'] = 7;
}

/* DELETE */
function deleteSecond(obj){
  delete obj.second;
  return obj;
}

/* LOOP */
function getValuesFromObject(obj){
  var arr = [];
  for(key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

/* FUNCTIONS ARE OBJECTS */
function invokeAnObject(){
  var arr = [];
  for(key in obj) {
    arr.push(myFunc.key);
  }
}
