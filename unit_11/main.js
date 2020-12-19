// exercise-1-1
const returnsFunction = (array = '', n) => {
  const newArray = []
  for (let i = 0; i < n; i++) {
    newArray.push(array)
  }
  return newArray
}

// exercise-1-2
const returnsFunction = (array = '', n) => {
  const newArray = []
  let i = 0
  while(i < n) {
    newArray.push(array)
    i += 1
  }
  return newArray
}

// exercise-2
const returnsFunction = (array = []) => {
  const newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}

// exercise-3
const deleteElement = (array = []) => {
  const trueValues = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] !== undefined && array[i] !== null && array[i] !== false && array[i] !== "") {
      trueValues.push(array[i])
    }
  }
  return trueValues
}

// exercise-4
const convertArray = (data = []) => {
  const array = {}
  data.forEach(item => {
    array[item[0]] = item[1]
  })
  return array
}

// exercise-5
const sortArray = (array = []) => {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

// exercise-6
const checkObject = data => {
  return typeof data === 'object'
}

// exercise-7
const objInput = { a: 1, b: 2, c: 3, d: 4 }
const arr = ['a', 'b']
const deleteKey = (obj, arr) => {
  const newObj = {...obj}
  arr.foreach(key => {
    delete newObj[key]
  })
  return newObj
}

// exercise-8
const deleteElement = (array = []) => {
  if(array.length < 5) {
    return 'Array phải có ít nhất 5 phần tử'
  } else {
    array.splice(1,2)
  }
  return array
}

// exercise-9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const checkArray = (students = []) => {
  const array = []
  students.map(student => {
    let splitName = student.name.split(" ")
    if (student.score < 5.0 || splitName[1] === 'Duy') {
      array.push('Fail')
    } else array.push('Pass')
  })
  return array
}

// exercise-10
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const checkArray = (students = []) => {
  const array = []
  students.map(student => {
    let [first, second] = student.score.split('.')
    let sum = Number(first) + Number(second) 
    if (sum > 5) {
      array.push(student.name)
    }
  })
  return array
}
