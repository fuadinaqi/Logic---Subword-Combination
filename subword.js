function getCombinations(value) {
  var result = []
  for (let i = 0; i < value.length; i++) {
    result.push(value[i])
    let temp = value[i]
    for (let j = i+1; j < value.length; j++) {
      temp += value[j]
      result.push(temp)
    }
  }
  return console.log(result);
}

getCombinations('cros');

getCombinations('artic');

getCombinations('darwin');
