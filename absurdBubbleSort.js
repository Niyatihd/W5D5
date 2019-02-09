const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan (el1, el2, callback) {
  reader.question(`is ${el1} greater than ${el2}?`, function (res) {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }

    // reader.close();
  });
}

// askIfGreaterThan(2, 1, (val) => console.log(val));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan === true) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      i += 1
      innerBubbleSortLoop(arr, (i), madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === (arr.length - 1)) {
    outerBubbleSortLoop();
  }
}

// innerBubbleSortLoop([3, 12, 1, 2, 5, 4, 10, 1], 0, false);

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps = true) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop() )
    }
  }
}