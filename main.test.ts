import {
  isPrime,
  allPositiveDivisors,
  areCoPrime,
  countOccurrences,
  digitalRoot,
  divisibility,
  engineeringNotation,
  gcd,
  primeFactors,
  harmonicMean,
  liouvilleLambda,
  say,
  sumOfDigits,
} from "./main";

describe("Check if isPrime function", () => {
  it("is okay with prime numbers", () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(2467)).toBe(true);
  });
  it("is okay with composite numbers", () => {
    expect(isPrime(36)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(98)).toBe(false);
  });
});
describe("Check if allPositiveDivisors function", () => {
  it("is okay with prime numbers", () => {
    expect(allPositiveDivisors(2467)).toStrictEqual([1, 2467]);
    expect(allPositiveDivisors(11)).toStrictEqual([1, 11]);
    expect(allPositiveDivisors(59)).toStrictEqual([1, 59]);
  });
  it("is okay with composite numbers", () => {
    expect(allPositiveDivisors(243)).toStrictEqual([1, 3, 9, 27, 81, 243]);
    expect(allPositiveDivisors(75)).toStrictEqual([1, 3, 5, 15, 25, 75]);
    expect(allPositiveDivisors(80)).toStrictEqual([
      1, 2, 4, 5, 8, 10, 16, 20, 40, 80,
    ]);
  });
});
describe("Check if areCoPrime function", () => {
  /**
   * Create an array [0,1,2,3,...,11]
   * , then map it and turn it into [1,2,3,...,12]
   * , check whether each number is co prime to the array element and save it as a boolean
   * , filter the array so that the length of the array is modified
   * and make sure it is correct
   */
  it("is okay with prime numbers", () => {
    // Check 13
    expect(
      [...Array(12).keys()]
        .map((i) => i + 1)
        .map((x) => areCoPrime(13, x))
        .filter((e) => e).length
    ).toBe(12);

    // Check 2467
    expect(
      [...Array(2466).keys()]
        .map((i) => i + 1)
        .map((a) => areCoPrime(2467, a))
        .filter((e) => e).length
    ).toBe(2466);

    // Check 59
    expect(
      [...Array(58).keys()]
        .map((i) => i + 1)
        .map((a) => areCoPrime(59, a))
        .filter((e) => e).length
    ).toBe(58);
  });
  it("is okay with composite numbers", () => {
    // Check 24
    expect(
      [...Array(23).keys()]
        .map((i) => i + 1)
        .map((a) => areCoPrime(24, a))
        .filter((e) => e).length
    ).toBe(8);

    // Check 81
    expect(
      [...Array(80).keys()]
        .map((i) => i + 1)
        .map((a) => areCoPrime(81, a))
        .filter((e) => e).length
    ).toBe(54);

    // Check 323
    expect(
      [...Array(322).keys()]
        .map((i) => i + 1)
        .map((a) => areCoPrime(323, a))
        .filter((e) => e).length
    ).toBe(288);
  });
});
describe("Check if countOccurrences function", () => {
  it("is okay", () => {
    expect(countOccurrences([66, 66, 81, 59, 59, 59, 59, 0])).toStrictEqual({
      66: [0, 1],
      81: [2],
      59: [3, 4, 5, 6],
      0: [7],
    });
  });
});
describe("Check if digitalRoot function", () => {
  it("is okay", () => {
    /**
     * 3 + 4 + 5 + 6 + 3 + 8 + 1 = 30
     * 3 + 0 = 3
     */
    expect(digitalRoot(3456381)).toBe(3);
    /**
     * 1 + 0 + 0 + 0 + 0 + 0 = 1
     */
    expect(digitalRoot(100_000)).toBe(1);
  });
});
describe("Check if divisibility function", () => {
  it("is okay", () => {
    expect(divisibility(65)).toStrictEqual([
      { number: 2, remainder: 1 },
      { number: 3, remainder: 2 },
      { number: 4, remainder: 1 },
      { number: 5, remainder: 0 },
      { number: 6, remainder: 5 },
      { number: 7, remainder: 2 },
      { number: 8, remainder: 1 },
      { number: 9, remainder: 2 },
    ]);
    expect(divisibility(13)).toStrictEqual([
      { number: 2, remainder: 1 },
      { number: 3, remainder: 1 },
      { number: 4, remainder: 1 },
      { number: 5, remainder: 3 },
      { number: 6, remainder: 1 },
      { number: 7, remainder: 6 },
      { number: 8, remainder: 5 },
      { number: 9, remainder: 4 },
    ]);
  });
});
describe("Check if engineeringNotation function", () => {
  it("is okay", () => {
    expect(engineeringNotation(432)).toStrictEqual({
      base: 432,
      power: 0,
    });

    expect(engineeringNotation(35200)).toStrictEqual({
      base: 35.2,
      power: 3,
    });
  });
});
describe("Check if gcd function", () => {
  it("is okay", () => {
    expect(gcd(4, 5)).toBe(1);
    expect(gcd(11, 22)).toBe(11);
    expect(gcd(88, 35200)).toBe(88);
  });
});
describe("Check if primeFactors function", () => {
  it("is okay with unique on", () => {
    expect(primeFactors(54, true)).toStrictEqual([2, 3]);
    expect(primeFactors(6780, true)).toStrictEqual([2, 3, 5, 113]);
    expect(primeFactors(83, true)).toStrictEqual([83]);
  });
  it("is okay with unique off", () => {
    expect(primeFactors(54, false)).toStrictEqual([2, 3, 3, 3]);
    expect(primeFactors(6780, false)).toStrictEqual([2, 2, 3, 5, 113]);
    expect(primeFactors(83, false)).toStrictEqual([83]);
  });
});
describe("Check if harmonicMean function", () => {
  it("is okay with prime numbers", () => {
    expect(harmonicMean(83)).toBe(1.9761904761904763);
    expect(harmonicMean(11)).toBe(1.8333333333333335);
  });
  it("is okay with composite numbers", () => {
    expect(harmonicMean(22222)).toBe(5.187208216619981);
    expect(harmonicMean(111)).toBe(2.921052631578948);
  });
});
describe("Check if liouvilleLambda function", () => {
  it("is okay with prime numbers", () => {
    expect(liouvilleLambda(17)).toBe(-1);
    expect(liouvilleLambda(3456793)).toBe(-1);
  });
  it("is okay with composite numbers", () => {
    expect(liouvilleLambda(16)).toBe(1);
    expect(liouvilleLambda(3456789)).toBe(1);
  });
});
describe("Check if say function", () => {
  it("is okay in short mode", () => {
    expect(say(1123, true)).toBe("1 thousand 123");
    expect(say(1_867_254, true)).toBe("1 million 867 thousand 254");
    expect(say(672_347_897_234, true)).toBe(
      "672 billion 347 million 897 thousand 234"
    );
  });
  it("is okay in long mode", () => {
    expect(say(1123, false)).toBe("one thousand one hundred twenty-three");
    expect(say(1_867_254, false)).toBe(
      "one million eight hundred sixty-seven thousand two hundred fifty-four"
    );
    expect(say(672_347_897_234, false)).toBe(
      "six hundred seventy-two billion three hundred forty-seven million eight hundred ninety-seven thousand two hundred thirty-four"
    );
  });
});
describe("Check if sumOfDigits function", () => {
  it("is okay", () => {
    expect(sumOfDigits(672_347_897_234)).toBe(62);
    expect(sumOfDigits(505_050_505)).toBe(25);
  });
});
