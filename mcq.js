var isFunctionCalled = false ;

function verifyAnswer( a ){
    if( isFunctionCalled == true )return ;
    isFunctionCalled = true ;
    if( a == 1 ){ 
        document.getElementById('correctOption').style.backgroundColor = "green" ;
        document.getElementById('correctOption').style.color = "#ffffff" ;
    } 
    else{ document.getElementById('incorrectOption').style.backgroundColor = "red" ;
        document.getElementById('incorrectOption').style.color = "#ffffff" ;
 }
    document.getElementById('desc').innerHTML="Java is object oriented programming language .It supports Class and Object. "

}