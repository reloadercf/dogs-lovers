export function ordenadoZA(laDatadeLosPerritos){
    return laDatadeLosPerritos.sort(function (a, b) {
        if (a.breed > b.breed) {
          return -1;
        }
        if (a.breed < b.breed) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
}