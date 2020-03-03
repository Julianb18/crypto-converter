// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.css";
// \/ All of your javascript should go here \/

const button = document.querySelector(`button`);
const crypto = document.getElementById(`selectedCrypto`);
const currency = document.getElementById(`selectedCurrency`);
const baseUrl = `https://api.cryptonator.com/api/ticker`;
let amountOfCrypto = document.querySelector(`.amountOfCrypto`);
let costOfCrypto = document.querySelector(`.costOfCrypto`);

button.addEventListener(`click`, e => {
  e.preventDefault();
  const url = `${baseUrl}/${crypto.value}-${currency.value}`;
  console.log(url);
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then(data => {
      let price = data.ticker.price;
      let convert = amountOfCrypto.value * price;
      costOfCrypto.value = convert.toFixed(2);

      console.log(amountOfCrypto.value * price);
    })
    .catch(e => {
      console.log(e);
    });
});
