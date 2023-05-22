function getNumber() {
    // Prompt the user to enter a number
    const input = Number(prompt("Please enter a number:"));
  
    // If the input is not a number, show an error message and prompt the user again
    if (Number.isNaN(input)) {
      alert("Invalid input. Please enter a valid number.");
      return getNumber();
    }
  
    // Return the number if it is valid
    return input;
  }
  
  function calculateStats(numbers) {
    // Initialise variables to keep track of the total, minimum, and maximum values
    let total = 0;
    let minimum = Number.MAX_VALUE;
    let maximum = Number.MIN_VALUE;
  
    // Iterate through the numbers and update the total, minimum, and maximum values
    for (const number of numbers) {
      total += number;
      if (number < minimum) minimum = number;
      if (number > maximum) maximum = number;
    }
  
    // Calculate the average of the numbers
    const average = total / numbers.length;
  
    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);
  
    // Calculate the median of the numbers
    const median = numbers.length % 2 === 0
      ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
      : numbers[Math.floor(numbers.length / 2)];
  
    // Return an object with the average, minimum, maximum, and median values
    return { average, minimum, maximum, median };
  }
  
  // Initialise an empty array to store the numbers
  const numbers = [];
  
  // Prompt the user to enter 10 numbers
  for (let i = 0; i < 10; i++) {
    numbers.push(getNumber());
  }
  
  // Print the 10 numbers
  console.log(`The 10 numbers are: ${numbers.join(", ")}`);
  
  // Calculate the stats of the numbers
  const stats = calculateStats(numbers);
  
  // Print the average, minimum, maximum, and median of the numbers
  console.log(`The average of the 10 numbers is ${stats.average.toFixed(2)}.`);
  console.log(`The minimum number is ${stats.minimum}.`);
  console.log(`The maximum number is ${stats.maximum}.`);
  console.log(`The median of the 10 numbers is ${stats.median}`);
  