var charactersEl = document.getElementById('characters');

fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=YOURPUBLICAPIKEYHERE').then(function(response) {
  return response.json();
}).then(function (data) {
  console.log('data', data);
  for (var i = 0; i < data.data.results.length; i++) {
    var character = data.data.results[i];
    console.log('character is', character);
    var newListItem = document.createElement('li');
    newListItem.innerText = character.name;
    charactersEl.appendChild(newListItem);
  }
});