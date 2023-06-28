let brand_item;
let type_item;
console.log(brand_item, type_item);

function getValue(array) {
  array.sort(sortFunction);
  function sortFunction(a, b) {
    if (a.name === b.name) {
      return 0;
    } else {
      return a.name < b.name ? -1 : 1;
    }
  }
  console.log(array);
  function sortFunction(a, b) {
    if (Number(a.price) === Number(b.price)) {
      return 0;
    } else {
      return Number(a.price) < Number(b.price) ? -1 : 1;
    }
  }
  console.log(array);
}

const krData = async function (brand_item, type_item) {
  let list = document.querySelector(".cards-container");
  list.innerHTML = "";

  brand_item = document.getElementById("marka").value;
  type_item = document.getElementById("product").value;
  try {
    const response = await fetch(
      ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item} `
    );

    console.log(response.status);

    if (!response.ok)
      throw new Error(`Ссылка не найдена. Ошибка ${response.status}`);
    const data = await response.json();

    getValue(data);

    for (key in data) {
      list.innerHTML += `
      <div class="post">
      <div class="header">
          <h4>${data[key].name}</h4>
          <h5>Бренд : ${data[key].brand}</h5>
          
      </div>          
      <img class="picture" src="${data[key].image_link}" width="400px" height="400px">
          <h3 class="price">${data[key].price} $</h3>
          <button class="btn btn-warning baton">
          <a href="https://yandex.ru/search/?text=${data[key].name}">Найти в Яндексе</a>
        </button>
      </div>`;
    }
  } catch (err) {
    console.error(err);
  }
};
