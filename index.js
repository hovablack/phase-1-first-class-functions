function receivesAFunction(cbf) {
  console.log(cbf());
}

function returnsANamedFunction() {
  return function cbf() {

  };
}

function returnsAnAnonymousFunction() {
  return function () {
    
  };
}