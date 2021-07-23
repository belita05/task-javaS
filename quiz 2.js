let Name= [];
let Surname =[];
 let Gender =[];
  let Age =[];
  
  for(let i = 0 ; i < 2; i++){
     Name[i] = prompt('Enter name ','');
Surname [i] =prompt('Enter surname','');
 Gender [i]= prompt('Enter Gender ','');
  Age [i]= prompt('Enter Age ','');
     
  } 
  console.log("Name|Surname|Gender|Age");
    for(let p = 0 ; p < 2; p++){
        console.log( Name[p]+"|" + Surname [p]+ "|"+Gender [p]+ "|"+ Age [p]);	 
  }

