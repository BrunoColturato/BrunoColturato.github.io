const quote = document.querySelector("#quote");
const adviceNumber = document.querySelector("#advice-number");

document.querySelector("body").onload = async function() {
  await getRandomAdvice();
}

async function fetchAdvice() {
  // Getting random advice.
  // "no-cache" needed for firefox.
  const APIResponse = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
  const data = await APIResponse.json();
  return data;
}

async function getRandomAdvice() {
  adviceNumber.innerHTML = "loading...";
  quote.innerHTML = "loading...";

  const data = await fetchAdvice();
  adviceNumber.innerHTML = data.slip.id;
  quote.innerHTML = "&ldquo;" + data.slip.advice + "&rdquo;";
}
