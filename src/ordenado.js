export function ordenado(criterio, dataDogs){
return dataDogs.sort(function(a, b) {
    if(criterio=='az'){
        if (a.breed > b.breed) {
            return 1;
          }
          if (a.breed < b.breed) {
            return -1;
          }
          // a must be equal to b
          return 0;
    }else if(criterio=='za'){
        if (a.breed > b.breed) {
            return -1;
          }
          if (a.breed < b.breed) {
            return 1;
          }
          // a must be equal to b
          return 0;
    }
  });
}