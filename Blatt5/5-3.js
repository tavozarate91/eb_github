function binomkoeff(n, k){
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(n){
  return n <= 0 ? 1 : n * factorial(n-1);

  //It is the same as:
  /*if (n <= 0){
    return 1;
  }
  else{
    return n * factorial(n - 1);
  }*/
}
console.log(binomkoeff(5, 2));
