let result;
let cardSection = document.querySelector(".Card-Section");

document.addEventListener("DOMContentLoaded", () => {
  let loading = document.querySelector("#loading");
  let errMsg = document.querySelector("#errMsg");
  let empty = document.querySelector("#empty");
});

async function Cards() {
  loading.style.display = "block";

  try {
    let res = await fetch(`https://fakestoreapi.com/products`);
    result = await res.json();

    if (!res.ok) {
      throw new Error(res.status);
    }

    loading.style.display = "none";
    result.forEach(function (e, i) {
      cardSection.innerHTML += `<div class="Card">
      <div class="CardContainer">
          <img src="${result[i].image}">
          <div class="card-details">
            <p class="cardCategory">${result[i].category}</p>
            <p>Lorem ipsum dolor sit, </p>
              <span>${result[i].price} $</span>
          </div>
        </div>
      </div>`;
    });
  } catch (error) {
    errMsg.innerText = error.message;
    errMsg.style.display = "block";
  }
}

Cards();

document
  .querySelector(".inputCategories")
  .addEventListener("click", function (e) {
    let checkBox = e.target;

    if (checkBox.checked) {
      console.log(checkBox.value);
      let newArr = result.filter((e, i) => {
        if (checkBox.value == result[i].category) {
          return result[i].category;
        }
      });

      RemoveCards();

      console.log(newArr);
      newArr.forEach(function (e, i) {
        cardSection.innerHTML += `
        <div class="Card">
        <div class="CardContainer">
            <img src="${result[i].image}">
            <div class="card-details">
              <p class="cardCategory">${result[i].category}</p>
              <p>Lorem ipsum dolor sit, </p>
                <span>${result[i].price} $</span>
            </div>
          </div>
        </div>`;
      });
    }
  });

// for flags for the filter is of them is true then update the if

function RemoveCards() {
  let cards = document.querySelectorAll(".Card");
  cards.forEach((e) => {
    e.remove();
  });
}
