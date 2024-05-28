const textAutotype = document.querySelector(".text-autotype span");
console.log(textAutotype);

const generateText = ["Developer", "Teacher", "money"];

function autoText(element, wordArray) {
  let textCount = 0;
  let sentence = 0;
  let reverseType = false;
  let skip = 0;
  setInterval(() => {
    if (skip) {
      skip--;
      return;
    }
    if (!reverseType) {
      skip = 2;
      element.innerText += wordArray[sentence][textCount];
      textCount++;
    } else {
      element.innerText = element.innerText.slice(
        0,
        element.innerText.length - 1
      );
      textCount--;
    }
    if (textCount === wordArray[sentence].length) {
      skip = 6;
      reverseType = true;
    }
    if (element.innerText.length === 0 && reverseType) {
      reverseType = false;
      sentence++;
    }
    if (sentence === wordArray.length) {
      sentence = 0;
    }
  }, 100);
}

autoText(textAutotype, generateText);
// let textCount = 0;
// let sentence = 0;
// let reverseType = false;
// let skip = 0;

// const settimeId = setInterval(() => {
//   if (skip) {
//     skip--;
//     return;
//   }
//   if (!reverseType) {
//     skip = 2;
//     textAutotype.innerText += generateText[sentence][textCount];
//     textCount++;
//   } else {
//     textAutotype.innerText = textAutotype.innerText.slice(
//       0,
//       textAutotype.innerText.length - 1
//     );
//     textCount--;
//   }
//   if (textCount === generateText[sentence].length) {
//     skip = 6;
//     reverseType = true;
//   }
//   if (textAutotype.innerText.length === 0 && reverseType) {
//     reverseType = false;
//     sentence++;
//   }
//   if (sentence === generateText.length) {
//     sentence = 0;
//   }
//   //   if (textCount === generateText[0].length) {
//   //     clearInterval(settimeId);
//   //     console.log("interval cleared!");
//   //   }
// }, 100);
