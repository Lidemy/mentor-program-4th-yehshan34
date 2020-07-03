function capitalize(str) {

  let alphabet = str[0]
  if (alphabet >= 'A' && alphabet <= 'Z') {
    return str
  } else if (alphabet >= 'a' && alphabet <= 'z') {
    return str.charAt(0).toUpperCase() + str.slice(1)
  } else {
    return str
  }

}

console.log(capitalize('hello'));
