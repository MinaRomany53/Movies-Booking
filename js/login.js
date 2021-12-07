"use strict";
const labels = document.querySelectorAll(".form-control label");

// Create span element for each word Function.
const createSpanEL = function (label) {
  const spanHtml = label.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style= "transition-delay: ${i * 50}ms ;" >${char}</span>`
    )
    .join("");
  return spanHtml;
};

// loop over all labels and call createSpanEL() .
for (let i = 0; i < labels.length; i++) {
  labels[i].innerHTML = createSpanEL(labels[i]);
}
