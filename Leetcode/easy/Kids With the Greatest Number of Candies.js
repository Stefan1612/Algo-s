/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highestCandyAmount = candies[0]
    
    let result = []
    
    // could also use sort() to find highest num
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > highestCandyAmount){
            highestCandyAmount = candies[i]
        }
    }
    
    for(let j = 0; j < candies.length; j++){
        if(candies[j] + extraCandies >= highestCandyAmount){
            result.push(true)
        }
        else {
            result.push(false)
        }
    }
    return result
    
};
