// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("project2 JS imported successfully!");
});

function addFav(event, id) {
  axios.post('/plant/add/' + id)
  event.target.innerText = 'In my garden'
  event.target.setAttribute('disabled', 'disabled') // uno es el nombre del atributo y el otro el valor.
}
