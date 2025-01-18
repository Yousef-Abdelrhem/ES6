let result;
let filteredArr = [];
let cardSection = document.querySelector(".Card-Section");
let SelectedCheckBox = [];
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
    // result.forEach(function (e, i) {
    //   cardSection.innerHTML += `<div class="Card">
    //   <div class="CardContainer">
    //       <img src="${result[i].image}">
    //       <div class="card-details">
    //         <p class="cardCategory">${result[i].category}</p>
    //         <p class= "cardDescription">${result[i].description}</p>
    //           <span>${result[i].price} $</span>
    //       </div>
    //     </div>
    //   </div>`;
    // });
    insertCard(result);
  } catch (error) {
    errMsg.innerText = error.message;
    errMsg.style.display = "block";
  }
}

Cards();

document
  .querySelector(".inputCategories")
  .addEventListener("click", function (e) {
    if (e.target.type == "checkbox") {
      let checkBox = e.target;
      updateCheckedBox(checkBox);
      filteredArr = result.filter((item) => {
        return (
          SelectedCheckBox.length === 0 || checkBox.value == "all" || SelectedCheckBox.includes(item.category)
        );
      });
      cardSection.innerHTML = "";
      insertCard(filteredArr);
    }
  });

function updateCheckedBox(checkBox) {
  if (checkBox.checked) {
    SelectedCheckBox.push(checkBox.value);
  } else {
    SelectedCheckBox = SelectedCheckBox.filter((item) => {
      return !(item === checkBox.value);
    });
  }
}

function insertCard(arr) {
  arr.forEach(function (e, i) {
    let shortenDec = e.description.length > 60
      ? e.description.substring(0, 70) + "..."
      : e.description;

    cardSection.innerHTML += `
      <div class="Card">
      <div class="CardContainer">
          <img src="${arr[i].image}">
          <div class="card-details">
            <p class="cardCategory">${arr[i].category}</p>
            <p>${shortenDec}</p>
              <span>${arr[i].price} $</span>
          </div>
        </div>
      </div>`;
  });
}

document.querySelector("select").addEventListener("input", function (e) {
  let val = e.target.value;
  if (filteredArr.length > 0) {
    SortingCards(filteredArr, val);
  } else {
    SortingCards(result, val);
    console.log("true");
  }
});

function SortingCards(arr, val) {
  let sortedArr = [...arr].sort((a, b) => {
    return val === "asc" ? a.price - b.price : b.price - a.price;
  });
  cardSection.innerHTML = "";
  insertCard(sortedArr);
}
