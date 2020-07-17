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


// function brickCalculator(building){
//     var res1 = 0;
//     var res2 = 0;
//     var res3 = 0;
//     var floor = 30;
//  for (var i = 0 ; i<building.length ; i++){
//      if(floor >= 1 && floor<=10 ){
//         res1 = 10*15*1000;
        
//      } else if (floor>= 11 && floor<=20){
//          res2 = 10*12*1000;
        
//      } else if(floor>=21) { 
//          res3 = 10*1000*flo
//      }
//  }
//   var totalResult = res1+res2+res3;
//   return totalResult ;
// }

// var result = brickCalculator();
// console.log(result);


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
