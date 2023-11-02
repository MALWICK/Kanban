
const values = ["value1", "value2", "value3"];

const newElements = values.map((value) => {
  
  const newElement = document.createElement("div");
  newElement.textContent = value;


  return newElement;
});


const cardContentElement = document.querySelector(".hl-card-content");


newElements.forEach((element) => {
  cardContentElement.appendChild(element);
});
