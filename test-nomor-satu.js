let value = Math.floor(Math.random() * 100 + 1);

const solution = (param) => {
  if (param % 3 === 0) {
    return "fish";
  } else if (param % 5) {
    return "bash";
  } else if (param % 15) {
    return "fish bash";
  } else {
    return "not include requirement";
  }
};

console.log(solution(value));
