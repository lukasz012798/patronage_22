const appContainer = document.querySelector("#app");

const url =
  "https://raw.githubusercontent.com/alexsimkovich/patronage/main/api/data.json";

const render = pizzas => {
  pizzas.forEach(pizza => {
    const pizzaElement = document.createElement("div");
    pizzaElement.classList.add("pizza");

    const image = document.createElement("img");
    image.setAttribute("src", pizza.image);

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("leftContainer");

    const rightContainer = document.createElement("div");
    rightContainer.classList.add("rightContainer");

    const title = document.createElement("h2");
    title.innerText = pizza.title;

    const price = document.createElement("p");
    price.innerText = `${pizza.price}0 zł`;

    const ingredients = document.createElement("p");
    pizza.ingredients.forEach((ingredient, index) => {
      ingredients.innerText += index > 0 ? `, ${ingredient}` : ingredient;
    });

    const buyBtn = document.createElement("button");
    buyBtn.classList.add("buyBtn");
    buyBtn.innerText = "zamów";

    leftContainer.appendChild(title);
    leftContainer.appendChild(price);
    rightContainer.appendChild(ingredients);

    pizzaElement.appendChild(image);
    pizzaElement.appendChild(leftContainer);
    pizzaElement.appendChild(rightContainer);
    pizzaElement.appendChild(buyBtn);

    appContainer.appendChild(pizzaElement);
  });
  console.log(pizzas[0]);
};

const fetchData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  render(data);
};

fetchData();
