var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  price() {
    let sum = 0;

    for (let key in this) {
      if (typeof this[key] === "string") {
        sum += parseInt(this[key]);
      }
    }

    return sum;
  },
  minPrice() {
      let min = Infinity;

      for (let key in this) {
        if (typeof this[key] === "string") {
          const price = parseInt(this[key]);
          if (price < min) {
            min = price;
          }
        }
      }
      return min;
  },
  maxPrice(){
    let min = -Infinity;

          for (let key in this) {
            if (typeof this[key] === "string") {
              const price = parseInt(this[key]);
              if (price > min) {
                min = price;
              }
            }
          }
          return min;
  }
};

services['Розбити скло'] = "200 грн";

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
