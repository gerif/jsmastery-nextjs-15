function checkNumber(num) {
  if (num < 10) {
    return "Меньше 10";
  }
  if (num > 10) {
    return "Больше 10";
  }
  if (num === 10) {
    return "Равно 10";
  }
}

function sumArray(numsArr) {
  let sum = 0;
  if (Array.isArray(numsArr) && numsArr.length > 0 && !Number.isNaN(numsArr)) {
    let sum = 0;
    numsArr.map((num) => {
      sum += num;
    });
    return sum;
  }
}

function getFullName(obj) {
  return `${obj.firstName} ${obj.lastName}`;
}
console.log(getFullName({ firstName: "Kate", lastName: "Lena" }));
