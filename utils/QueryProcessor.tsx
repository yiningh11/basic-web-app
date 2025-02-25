export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "rohan20";
  }
  
  const additionMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return (num1 + num2).toString();
  }

  const multiplicationMatch = query.match(/what is (\d+) multiplied by (\d+)\?/i);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }


  const largestMatch = query.match(/which of the following numbers is the largest: ([\d, ]+)\?/i);
  if (largestMatch) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    return Math.max(...numbers).toString();
  }
  
  const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/i);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const isSquareAndCube = (num: number) => {
      const root = Math.round(Math.pow(num, 1 / 6));
      return root ** 2 * root ** 3 === num;
    };
    const result = numbers.find(isSquareAndCube);
    return result !== undefined ? result.toString() : "None";
  }

  
  return "";
}
