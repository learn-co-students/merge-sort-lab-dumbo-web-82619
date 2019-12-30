function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2) {
  let mergedArr = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(findMinAndRemoveSorted(arr1))
    } else {
      mergedArr.push(findMinAndRemoveSorted(arr2))
    }
  }
  return mergedArr.concat(arr1).concat(arr2)
}
  
function mergeSort(arr) {
  let midPoint = arr.length / 2
  let spanA = arr.slice(0, midPoint)
  let spanB = arr.slice(midPoint, arr.length)
  let sortedArr

  if (arr.length === 1) {
    return arr
  } else {
    sortedArr = merge(mergeSort(spanA), mergeSort(spanB))
  }
  return sortedArr
}

// example of merge sort
// BIG O is n log n
