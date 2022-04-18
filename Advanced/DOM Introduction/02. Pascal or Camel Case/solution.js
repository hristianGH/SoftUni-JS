function solve() {
  let output ="";
  let firstValue=document.getElementById(`text`).value;
  let secondValue = document.getElementById(`naming-convention`).value;
  let cases = [`Camel Case`,`Pascal Case`]
  if (cases.includes(secondValue)) {
    arr=firstValue.split(" ");

    if (secondValue=='Camel Case') {
         output= camelCase(firstValue);
    }
     else{
           output=pascalCase(firstValue);
     }
  }
  else{
    return`Error`
  }

  document.getElementById('result').textContent=output;
  return output;
}

function camelCase(str) {
  return str
      .replace(/\s(.)/g, function(a) {
          return a.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, function(b) {
          return b.toLowerCase();
      });
}

function pascalCase(str) {
  return str
      .replace(/\s(.)/g, function(a) {
          return a.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, function(b) {
          return b.toUpperCase();
      });
}