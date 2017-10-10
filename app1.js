var isValidCard = function (card){
  
    for (var i = 0; i<(card.split("")).length; i++){
      var revertir = (card.split("")).reverse();
      return revertir;
    }
    for (var j = 1; j<revertir.length; j= j+2){
      var prim = []
      if (revertir[j]*2 > 10){
        prim = (revertir[j]*2 - 9);
      }
         return prim;
      }
    
    for (var h = 0; h<revertir.length; h = h + 2){
      var sec = []
        sec = revertir[h]
          return sec
    }
    for ( var k = 0;k<prim.length;k++){
      var sum = 0
        sum += prim [k]
          return sum
    }
    for ( var l = 0;l<sec.length;l++){
      var sum1 = 0
        sum1 += prim [l]
          return sum1
    }
    var suma = sum + sum1
    var residuo = suma%10
    if (residuo === 0){
      return 'Número de tarjeta válida'
    }
      return 'Número de tarjeta inválida'
  }
      
  isValidCard('5312134831714901')