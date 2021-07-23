let name= prompt('Enter name ');
   let gender =prompt('enter gender (Male or Female)');
   let age= prompt('enter age');

   
   if (age >= 18){
	   displayinfo(name,gender);
   }else{
	   return false;
   }

   
  function displayinfo(name,gender){
	   let gender;
	   if( gender== 'Female'){
		   gender = 'F';
	   }
	   if (gender == 'Male'){
		   gender = 'M';
	   }
if (checkAge (--age) ){

console.log('Hi' + name + ' (' + gender+' ) , you are above 18' ); 
   }else
{
console.log('Hi' + name + ' (' + gender+' ) , you are below 18' ); 
  
}