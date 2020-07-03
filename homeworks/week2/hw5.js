function join(arr, concatStr) {
  let newString = ''
  for (let i = 0; i < arr.length - 1; i++) {
    newString += arr[i] + concatStr
  }
  newString = newString + arr[arr.length - 1]
  return newString
}

function repeat(str, times) {
  let newstring = ''
  for (let i = 0; i < times; i++) {
    newstring += str
  }
  return newstring
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
