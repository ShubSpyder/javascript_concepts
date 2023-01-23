// closure eg: 1 start
const multFn = () => {
  let mult = 9;
  return (val) => {
    mult = mult * val;
    return mult;
  };
};

const mult = multFn();
console.log(mult(2));
// closure eg: 1 end

// closure eg: 2
const rentPrice = (intialRent) => {
  let rent = intialRent;

  return {
    showRent: () => {
      console.log('current rent = ',rent);
    },
    increaseRent: (val) => {
      rent += val;
    },
    decreaseRent: (val) => {
      rent -= val;
    },
  };
};

const Rent = rentPrice(8000);

Rent.increaseRent(1000);
Rent.decreaseRent(500);
Rent.showRent();

console.log('test_branch_changes')