function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var R=earthRadius;
  var result=[];
  
  function Op(arr){
  var obj={};
  var h=arr.avgAlt;
  var T=2*Math.PI*(R+h)*Math.pow(R+h,0.5)/Math.pow(GM,0.5);
  T=Math.round(T);
  obj.name=arr.name;
  obj.orbitalPeriod=T;
  result.push(obj);
  }
  
  arr.forEach(Op);
  return result;
  
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
