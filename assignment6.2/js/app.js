//gratest number 
var a = 5, b = 10, c = 15;

/* checks a>b and a>c  if  both conditions satisfied, A is greater */
if (a>b && a>c){
    
    console.log("The gratest number  is " + a);
    
 /* checks b>a  and b>c  if  both conditions satisfied, b is greater */   
}else if(b>a && b>c){
    
   console.log("The gratest number  is " + b);
    
 /* if the above two conditions were false c is greater*/   
}else{
    
    console.log("The gratest number  is " + c);
}



//gratest number find with shor method

/*Vriable*/
var num = [ 7, 18, 21, 65, 0, 50, 2 ];

/*function for sort*/
function gratest_number() {
    num.sort(function(a, b){return b-a});
}

gratest_number();

/*Out put in console*/
 console.log("The gratest number  is " + num[0]);

   