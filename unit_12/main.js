// Exercise 1
const compareArray = (array1, array2) => {
  if (JSON.stringify(array1.sort()) === JSON.stringify(array2.sort())) {
    return true
  } else  {
    return false
  } 
}
// Exercise 2:
const newArray = []
const flattenArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i])
    } else {
      newArray.push(array[i])
    }
  }
  return newArray
}

// Exercise 3:
const chunksArray = (array, size) => {
  const newArray = []
  while (array.length) {
    newArray.push(array.splice(0, size))
  }
  return newArray
}

// Exercise -4
function ResultArray(array1, array2) {
  const result = []
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        result.push(array1[i])
      }
    }
  }
  return result
}

// Exercise 5:
const checkPriceDownCode = date => {
  const discountTime = new Date('Oct 30, 2020 12:30:32')
  if (Date.parse(date) <= Date.parse(discountTime)) {
    return true
  } else {
    return false
  }
}

// Exercise 6:
const checkEmail = email => {
  const regexEmail = /^[a-z0-9]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z]*[a-z])?\.)+[a-z](?:[a-z]*[a-z])?$/i
  return regexEmail.test(email)
}

// Exercise 7:
const checkName = name => {
  const regexName = /^\D([a-z0-9_]){2,10}$/g
  return regexName.test(name)
}
