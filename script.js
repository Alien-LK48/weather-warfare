`use strict`
//second script link function
function loadScript(src){
   const script=document.createElement(`script`);
   script.src=src;
   document.head.prepend(script); 
}
loadScript('script2.js')

// roundnumber function
function roundnumber(number){
   return Math.round(number*100)/100
};

//function for celcius
function calculateC(){
   var c= document.getElementById('cel').value;
   var k= Number(c) +273.15;
   var f= ((c*1.8)+32);
   document.getElementById(`far`).value=  roundnumber(f) ;
   document.getElementById(`kel`).value=  roundnumber(k) ;
   condition(f,k,c);
};

//function for farenhight
function calculateF(){

   var f2= document.getElementById(`far`).value;
   var c2= ((f2-32)*(5/9));
   var k2= (((f2-32)*(5/9))+(273.15));
   document.getElementById(`cel`).value=  roundnumber(c2) ;
   document.getElementById(`kel`).value=  roundnumber(k2) ;
   condition(f2,k2,c2);
};

//function for kelvin
function calculateK(){

   var k3= document.getElementById(`kel`).value;
   var c3= Number(k3)-273.15;
   var f3= ((k3-273.15)*(9/5)+32);
   document.getElementById(`cel`).value=  roundnumber(c3) ;
   document.getElementById(`far`).value=  roundnumber(f3) ;
   condition(f3,k3,c3);
}











