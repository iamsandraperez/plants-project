document.addEventListener("DOMContentLoaded", () => {
  console.log("project2 JS imported successfully!");
});

function addFav(event, id) {
  axios.post('/plant/add/' + id)
  event.target.innerText = 'In my garden'
  event.target.setAttribute('disabled', 'disabled')
}

