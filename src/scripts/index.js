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
const amountOfCrypto = document;

button.addEventListener(`click`, e => {
  e.preventDefault();
  const url = `${baseUrl}/${crypto.value}-${currency.value}`;
  console.log(url);
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    })
    .then(data => {
      console.log(data.ticker.price);
    })
    .catch(e => {
      console.log(e);
    });
});
