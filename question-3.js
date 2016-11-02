
var users = [
  {
    first_name: 'Tom',
    last_name: 'Dale'
  },
  {
    first_name: 'Yehuda',
    last_name: 'Katz'
  },
  {
    first_name: 'Taylor',
    last_name: 'Otwell'
  }
];



function normalize() {
  var normalized = users.map(function(obj){
    obj['firstName'] = obj['first_name'];
    delete obj['first_name'];
    obj['lastName'] = obj['last_name'];
    delete obj['last_name'];
    return obj;
   
  
  })
  return normalized;
}

var normalizedUsers = normalize(users);
console.log(normalizedUsers);


