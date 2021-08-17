/**
 * Calculates the sum of the number's digits once. You might actually need `digitalRoot` instead.
 * @param num Number or string to calculate the sum of digits
 * @returns Sum of digits
 * @example 98: `9+8` = 17
 */
export const sumOfDigits = (num: number | string): number =>
  num
    .toString()
    .split("")
    .map((digit: number | string) => parseInt(digit as string))
    .reduce((a: number, b: number) => a + b, 0);
/**
 * Recursively calculates GCD of two numbers
 * @param num1 First number
 * @param num2 Second number
 * @returns GCD
 */
export const gcd = (num1: number, num2: number): number =>
  num1 === 0 ? num2 : gcd(num2 % num1, num1);

/**
 * Find all coprimes of the input number
 * @param num Input
 * @returns CoPrime
 */
export const coprime = (num: number): number[] => {
  const coprimes: number[] = [];

  for (let i = 1; i < num; i++) {
    // If gcd is 1 add i to coprimes
    gcd(i, num) === 1 && coprimes.push(i);
  }

  return coprimes;
};

/**
 * Calculates the prime factors of the input
 * @param num Input number
 * @param unique Whether the result should be filtered to only contain the unique prime factors
 * @returns Prime factors
 */
export const primeFactors = (num: number, unique?: boolean): number[] => {
  const primeFactors: number[] = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  return unique ? [...new Set(primeFactors)] : primeFactors;
};

/**
 * Return all positive divisors of the input number regardless of whether they are prime or not. You might need `primeFactors` instead.
 * @param num Input number
 * @returns Positive divisors of the number
 */
export const allPositiveDivisors = (num: number): number[] => {
  const divisors: number[] = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
    if (num % i === 0) {
      divisors.push(i);
      if (num / i !== i) divisors.push(num / i);
    }
  divisors.sort((x, y) => x - y); // numeric sort
  return divisors;
};

/**
 * @param num Input number
 * @param short Whether the input should be shortened
 * @returns The number being read
 * @example say(123, false) // One hundred thirty three
 * say(123, true) // 1 hundred 23
 */
export const say = (num: number, short: boolean): string => {
  const ones: string[] = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens: string[] = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens: string[] = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  function convertTens(num: number): string {
    return num < 10
      ? ones[num]
      : num >= 10 && num < 20
      ? teens[num - 10]
      : tens[Math.floor(num / 10)] +
        (num % 10 === 0 ? " " : "-") +
        ones[num % 10];
  }
  function convertHundreds(num: number): string {
    return num > 99 && !short
      ? `${ones[Math.floor(num / 100)]} hundred ${convertTens(num % 100)}`
      : short
      ? num.toString()
      : convertTens(num);
  }
  function convertThousands(num: number): string {
    return num >= 1000
      ? `${convertHundreds(Math.floor(num / 1000))} thousand ${convertHundreds(
          num % 1000
        )}`
      : convertHundreds(num);
  }

  function convertMillions(num: number): string {
    return num >= 1000000
      ? `${convertMillions(
          Math.floor(num / 1000000)
        )} million ${convertThousands(num % 1000000)}`
      : convertThousands(num);
  }

  function convertBillions(num: number): string {
    return num >= 1000000000
      ? `${convertBillions(
          Math.floor(num / 1000000000)
        )} billion ${convertMillions(num % 1000000000)}`
      : convertMillions(num);
  }

  function convertTrillions(num: number): string {
    return num >= 1000000000000
      ? `${convertTrillions(
          Math.floor(num / 1000000000000)
        )} trillion ${convertBillions(num % 1000000000000)}`
      : convertBillions(num);
  }

  function convertQuadrillions(num: number): string {
    return num >= 1000000000000000
      ? `${convertQuadrillions(
          Math.floor(num / 1000000000000000)
        )} quadrillion ${convertTrillions(num % 1000000000000000)}`
      : convertTrillions(num);
  }

  return num === 0 ? "zero" : convertQuadrillions(num).replace(/\s{2,}/g, " ");
};

/**
 * @param num Input number
 * @returns Whether the input number is prime
 */
export const isPrime = (num: number): boolean => {
  if (num === 2) return true;
  const boundary: number = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};

/**
 * Recursively calculates digital root using sumOfDigits function
 * @param num Number
 * @returns The digital root of the input number
 * @example digitalRoot(89) // 8+9=17. 1+7=8
 */
export const digitalRoot = (num: number): number =>
  num < 10 ? num : digitalRoot(sumOfDigits(num));

/**
 * @param num Number
 * @returns The engineering notaion of the input number
 */
export const engineeringNotation = (
  num: number
): {
  base: number | string;
  power: number;
} => {
  let result: { base: number | string; power: number };
  num.toString().length > 3
    ? (result = {
        base: parseFloat(
          num
            .toString()
            .replace(
              num.toString().slice(num.toString().length % 3),
              `.${num.toString().slice(num.toString().length % 3)}`
            )
        ),
        power: num.toString().slice(num.toString().length % 3).length,
      })
    : (result = {
        base: num,
        power: 0,
      });
  return result;
};

/**
 * Count the occurrences of each number is an array
 * @param nums Input number
 * @returns An object with numbers as keys and number of occurrences as values
 */
export const countOccurrences = (
  nums: number[]
): { [key: string]: number[] } => {
  const result: { [key: string]: number[] } = {};
  // Check if input is array.
  if (nums instanceof Array) {
    // Create an array for non-existing property and fill existing arrays.
    nums.forEach((key, index) => {
      // !result[key] ? (result[key] = [index]) : result[key].push(index)
      if (!result[key]) {
        // Initial object property creation.
        result[key] = [index]; // Create an array for that property.
      } else {
        // Same occurrences found.
        result[key].push(index); // Fill the array.
      }
    });
  }
  return result;
};

/**
 * If number of prime factors is even returns 1, otherwise returns -1
 * @param num Number
 * @returns -1 or 1
 */
export const liouvilleLambda = (num: number): number =>
  primeFactors(num, false).length % 2 === 0 ? 1 : -1;

/**
 * Radic of the number
 * @param num Input number
 * @returns All prime factors of the number multiplied
 */
export const radical = (num: number): number =>
  primeFactors(num, true).reduce(
    (totalValue, currentValue) => totalValue * currentValue
  );

/**
 * @param num Number
 * @param aliquot Whether is should be aliquot or not
 * @returns Sum of all of the divisors of the number
 */
export const sumOfDivisors = (num: number, aliquot: boolean): number =>
  allPositiveDivisors(num).reduce((totalValue, currentValue) =>
    !aliquot
      ? totalValue + currentValue
      : currentValue !== num
      ? totalValue + currentValue
      : 0
  );

/**
 * @param num Input number
 * @returns Harmonic Mean of the input
 */
export const harmonicMean = (num: number): number => {
  let sum = 0;
  allPositiveDivisors(num).map((n) => (sum += 1 / n));

  return allPositiveDivisors(num).length / sum;
};

/**
 * Returns the remainder of the number if divided by numbers between 2 and 10
 * @param num Input number
 * @returns Array of objects of the result
 */
export const divisibility = (
  num: number
): { number: number; remainder: number }[] => {
  const result: { number: number; remainder: number }[] = [];
  for (let n = 2; n < 10; n++) {
    result.push({
      number: n,
      remainder: num % n,
    });
  }
  return result;
};
