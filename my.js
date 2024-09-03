const textbox = document.getElementById("textbox");
const tof = document.getElementById("tof");
const toc = document.getElementById("toc");
const result = document.getElementById("result");

let temp;

function convert() {
  if (tof.checked) {
    temp = parseFloat(textbox.value);
    result.textContent = (temp * 9) / 5 + 32;
  } else if (toc.checked) {
    temp = parseFloat(textbox.value);
    result.textContent = ((temp - 32) * 5) / 9;
  } else {
    result.textContent = "Please select a conversion type.";
  }
}
