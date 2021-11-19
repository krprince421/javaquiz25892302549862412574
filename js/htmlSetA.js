//Problem faced how to save html tag into javascript array ;
// How to hide correctAnswer from web page ? User can see easily.
//Question array contains questions .
var question = []
//Array Option_01 contains option number 01 of all mcq question .
var option_01 = []
//Array Option_02 contains option number 01 of all mcq question .
var option_02 =[]
//Array Option_03 contains option number 01 of all mcq question .
var option_03 = []
//Array Option_04 contains option number 01 of all mcq question .
var option_04 = []
// Array correctAnswer contains answer key .
var correctAnswer = []
// Array answerTicked contains answer selected by user .
var answerTicked = []
// Array desc contains details of the solution or logic behind them .
var desc = []

question[1] = " Q1 . Full form of HTML is ?   "
question[2] = " Q2 . HTML is programming Language ? "
question[3] = " Q3 . What is use of  DOCTYPE HTML in HTML"
question[4] = " Q4 . Correct sequential order of HTML page is : "
question[5] = " Q5 . Tag used for writing paragraph is : "
question[6] = " Q6 . ________ is used to set title of a web page "
question[7] = " Q7 . Tag used for heading is / are "
question[8] = " Q8 . Which language can be used to describe how HTM elements are to be displayed on screen ?"
question[9] = " Q9 . Syntax for saving HTML file is / are "
question[10] = " Q10 . Tag used for HTML Link is / are "

option_01[1] = "Hypertext Markup Language"
option_02[1] = "Hyptertext Makeup Language"
option_03[1] = "None of The above"
option_04[1] = "Both"



option_01[2] = "TRUE"
option_02[2] = "FALSE"
option_03[2] = "none"
option_04[2] = "none"

option_01[3] = "It is not required in html page ."
option_02[3] = "To identify the version of HTML page "
option_03[3] = "Both are correct "
option_04[3] = "None of the above"

option_01[4] = "html body  head "
option_02[4] = "head html  body"
option_03[4] = "body head  html"
option_04[4] = "html head  body"

option_01[5] = "p"
option_02[5] = "h1"
option_03[5] = "h2"
option_04[5] = "h3"

option_01[6] = "setTitle"
option_02[6] = "title"
option_03[6] = "settitle"
option_04[6] = "All of the above"

option_01[7] = "h1"
option_02[7] = "h2 "
option_03[7] = "h3"
option_04[7] = "All of the above"

option_01[8] = "C++"
option_02[8] = "C#"
option_03[8] = "XML"
option_04[8] = "CSS"

option_01[9] = ".html"
option_02[9] = ".HT"
option_03[9] = ".xml"
option_04[9] = "All of the above."

option_01[10] =  "c"
option_02[10] = "b"
option_03[10] = "a"
option_04[10] = "All of the above."

correctAnswer[1] = 1 ;
correctAnswer[2] = 2 ;
correctAnswer[3] = 2 ;

correctAnswer[4] = 4 ;
correctAnswer[5] = 1 ;
correctAnswer[6] = 2 ;
correctAnswer[7] = 4 ;
correctAnswer[8] = 4 ;
correctAnswer[9] = 1 ;
correctAnswer[10] = 3 ;


desc[0] = "None"
desc[1] = "Full Form of HTML is Hypertext Markup Language ."
desc[2] = "Html is not programming language . It is markup language ."
desc[3] = "It is required to identify the version of html page ."
desc[4] = "N/A"
desc[5] = "p tag is used for writing paragraph . "
desc[6] = "title is used to set title to web page."
desc[7] = "h1 , h2 and h3 can be used to set heading . "
desc[8] = "N/A"
desc[9] = "N/A"
desc[10] = "N/A"

for( var i = 0 ; i <= 30 ; i++ )answerTicked[i] = -1 ;

function tickAnswer( question_no , optionSelected ){
    answerTicked[question_no] = optionSelected ;

}
function displayQuestionOption(){
    
    document.getElementById('question_01').innerHTML = question[1] ;
    document.getElementById('question_02').innerHTML = question[2] ;
    document.getElementById('question_03').innerHTML = question[3] ;
    document.getElementById('question_04').innerHTML = question[4] ;
    document.getElementById('question_05').innerHTML = question[5] ;
    document.getElementById('question_06').innerHTML = question[6] ;
    document.getElementById('question_07').innerHTML = question[7] ;
    document.getElementById('question_08').innerHTML = question[8] ;
    document.getElementById('question_09').innerHTML = question[9] ;
    document.getElementById('question_10').innerHTML = question[10] ;

    document.getElementById('question_01_option_01').innerHTML = option_01[1] ;
    document.getElementById('question_01_option_02').innerHTML = option_02[1] ;
    document.getElementById('question_01_option_03').innerHTML = option_03[1] ;
    document.getElementById('question_01_option_04').innerHTML = option_04[1] ;

    document.getElementById('question_02_option_01').innerHTML = option_01[2] ;
    document.getElementById('question_02_option_02').innerHTML = option_02[2] ;
    document.getElementById('question_02_option_03').innerHTML = option_03[2] ;
    document.getElementById('question_02_option_04').innerHTML = option_04[2] ;

    document.getElementById('question_03_option_01').innerHTML = option_01[3] ;
    document.getElementById('question_03_option_02').innerHTML = option_02[3] ;
    document.getElementById('question_03_option_03').innerHTML = option_03[3] ;
    document.getElementById('question_03_option_04').innerHTML = option_04[3] ;

    document.getElementById('question_04_option_01').innerHTML = option_01[4] ;
    document.getElementById('question_04_option_02').innerHTML = option_02[4] ;
    document.getElementById('question_04_option_03').innerHTML = option_03[4] ;
    document.getElementById('question_04_option_04').innerHTML = option_04[4] ;

    document.getElementById('question_05_option_01').innerHTML = option_01[5] ;
    document.getElementById('question_05_option_02').innerHTML = option_02[5] ;
    document.getElementById('question_05_option_03').innerHTML = option_03[5] ;
    document.getElementById('question_05_option_04').innerHTML = option_04[5] ;

    document.getElementById('question_06_option_01').innerHTML = option_01[6] ;
    document.getElementById('question_06_option_02').innerHTML = option_02[6] ;
    document.getElementById('question_06_option_03').innerHTML = option_03[6] ;
    document.getElementById('question_06_option_04').innerHTML = option_04[6] ;

    document.getElementById('question_07_option_01').innerHTML = option_01[7] ;
    document.getElementById('question_07_option_02').innerHTML = option_02[7] ;
    document.getElementById('question_07_option_03').innerHTML = option_03[7] ;
    document.getElementById('question_07_option_04').innerHTML = option_04[7] ;

    document.getElementById('question_08_option_01').innerHTML = option_01[8] ;
    document.getElementById('question_08_option_02').innerHTML = option_02[8] ;
    document.getElementById('question_08_option_03').innerHTML = option_03[8] ;
    document.getElementById('question_08_option_04').innerHTML = option_04[8] ;

    document.getElementById('question_09_option_01').innerHTML = option_01[9] ;
    document.getElementById('question_09_option_02').innerHTML = option_02[9] ;
    document.getElementById('question_09_option_03').innerHTML = option_03[9] ;
    document.getElementById('question_09_option_04').innerHTML = option_04[9] ;

    document.getElementById('question_10_option_01').innerHTML = option_01[10] ;
    document.getElementById('question_10_option_02').innerHTML = option_02[10] ;
    document.getElementById('question_10_option_03').innerHTML = option_03[10] ;
    document.getElementById('question_10_option_04').innerHTML = option_04[10] ;



    

}
function colorOption( selectedOption , nonSelectedOption1 , nonSelectedOption2 , nonSelectedOption3 , qNo , optionTicked  ){
   
   
    answerTicked[qNo] = optionTicked ;

    
    
    document.getElementById( nonSelectedOption1 ).style.backgroundColor = "white"
    document.getElementById( nonSelectedOption1 ).style.color = "#000000"
    document.getElementById( nonSelectedOption2 ).style.backgroundColor = "white"
    document.getElementById( nonSelectedOption2 ).style.color = "#000000"
    document.getElementById( nonSelectedOption3 ).style.backgroundColor = "white"
    document.getElementById( nonSelectedOption3 ).style.color = "#000000"

   

}
function displaySolution( qNo , description , showSolution , optionId ){
    

if( answerTicked[qNo] == correctAnswer[qNo] ){
    document.getElementById( showSolution ).style.color = "green"
    document.getElementById( showSolution).innerHTML = "CORRECT"
    document.getElementById( optionId ).style.backgroundColor = "green"
    document.getElementById( optionId ).style.color = "#ffffff"

    
}
else{
    document.getElementById(showSolution ).style.color = "red"
    document.getElementById(showSolution).innerHTML = "INCORRECT"
    document.getElementById( optionId ).style.backgroundColor = "red"
    document.getElementById( optionId ).style.color = "#ffffff"
    
}
    document.getElementById( description ).innerHTML = desc[ qNo ] 

}






