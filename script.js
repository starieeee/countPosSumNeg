function countPositiveSumNegative(input){
  let pos = 0;
  let neg = 0;
  if(!input || input.length === 0){
    return [];
  }
  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      pos++;
    }
    else{
      neg += input[i];
    }
  }
  return [pos, neg];
}
console.log(countPositiveSumNegative([10, 20, 30, -5, -10, -15]));
