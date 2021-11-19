var res = "You solved "
res += localStorage.getItem('a') ;

function displaySolution(){
    document.getElementById('resultHeading').innerHTML = res + " questions Correctly . " ;
}