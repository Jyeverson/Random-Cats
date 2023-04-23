const catFactEl = document.getElementById('cat-fact');
const catImageEl = document.getElementById('cat-image');
const newCatButton = document.getElementById('new-cat-button');

function getCatFact() {
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(response => response.json())
    .then(data => {
      catFactEl.textContent = data[0].text;
    })
    .catch(error => {
      //catFactEl.textContent = 'Oops! Algo deu errado.';
      //console.error(error);
    });
}

function getCatImage() {
  fetch('https://api.thecatapi.com/v1/images/search?limit=1&size=full')
    .then(response => response.json())
    .then(data => {
      catImageEl.src = data[0].url;
    })
    .catch(error => {
      console.error(error);
    });
}

newCatButton.addEventListener('click', () => {
  getCatFact();
  getCatImage();
});

getCatFact();
getCatImage();