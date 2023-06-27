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
  brand_item = document.getElementById("marka").value;
  type_item = document.getElementById("product").value;
  const response = await fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item} `
  );

  console.log(response.status);

  if (!response.ok)
    throw new Error(`Ссылка не найдена. Ошибка ${response.status}`);
  const data = await response.json();

  getValue(data);

  let list = document.querySelector(".posts");

  for (key in data) {
    list.innerHTML += `
    <div class="post">
        <h4>${data[key].name}</h4>
        <h5>${data[key].brand}</h5>
        <img class="picture" src="${data[key].image_link}">
        <p>${data[key].price}</p>
        <button>
        <a href="https://yandex.ru/search/?text={${data[key].name}}">Найти в Яндексе</a>
      </button>
    </div>
    `;
  }
};
