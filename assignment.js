function feetToMile(feet){
    if(feet<0){
        return false ;
    } else {
     var mile =  feet / 5280;
     return mile; 
    }
  }
 var result = feetToMile(2000);
  console.log(result);

  

function woodCalculator(chair, table, bed){
    var chairCount = chair*1 ;
    var tableCount = table*3 ;
    var bedCount = bed*5 ;
    var totalCount = chairCount + tableCount + bedCount ;
    return totalCount ;
 }
 var result = woodCalculator(12, 2, 5);
 console.log("The total wood needed is :",result);


function brickCalculator(floor){
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
      if(floor<0){
         return false;
      }
      else if(floor >= 1 && floor<=10 ){
       result1 = floor*15*1000;
       return result1 ;
     }  
       else if (floor>= 11 && floor<=20){
        result2 = ((floor-10)*12*1000)+(10*15*1000);
        return result2 ;
     }  
       else if(floor>=21) { 
        result3 = ((floor-20)*10*1000)+(10*12*1000)+(10*15*1000);
        return result3;
     }

  }
  var result = brickCalculator(50);
   console.log(result);


function tinyFriend(names){
    var shortestName = names[0];
    for ( let i= 0 ; i < names.length ; i++){
        var currentName = names[i];
        if (currentName.length < shortestName.length){
          shortestName = currentName ;
              
           }
       } 
       return shortestName ;
  }
  var names = ['Ishrat', 'Abonty' , 'Bushu', 'Roza','Onnesha','Sayma'];
  console.log(tinyFriend(names));
