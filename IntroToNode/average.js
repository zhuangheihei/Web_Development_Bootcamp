function average(scores){
   
    var sum = 0;
    scores.forEach(function(score){
        sum += score;
    });
    return Math.round(sum/scores.length);
}

var scores = [69,87,88,84,96,91,75];
console.log(average(scores));