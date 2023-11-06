export default function randomNonRepeat(min, max, count){
  if(count > (max-min + 1)){
    return;
  }
  const uniqueNumbers = [];
  for(let i = min; i <= max; i++){
    uniqueNumbers.push(i);
  }
  for(let i = uniqueNumbers.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [uniqueNumbers[i], uniqueNumbers[j]] = [uniqueNumbers[j], uniqueNumbers[i]];
  }
  return uniqueNumbers.slice(0, count);
}