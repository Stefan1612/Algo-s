
function selectionSort(array){
  
  let toSort = array
  
  let sortedArray = []
    
    while(sortedArray.length !== array.length){
      
      let highestNum = toSort[0]
      
      for(let i = 0; i < toSort.length; i++){
        
        if(toSort[i] > highestNum){
            highestNum = toSort[i]
            toSort[i] = toSort[0]
            toSort[0] = highestNum
        }
        
      }
      sortedArray.push(highestNum)
      toSort.shift()
    }
  

  return sortedArray
}
