document.addEventListener("DOMContentLoaded", () => {
  console.log("project2 JS imported successfully!");
});

function addFav(event, id) {
  axios.post('/plant/add/' + id)
  event.target.innerText = 'In my garden'
<<<<<<< HEAD
  event.target.setAttribute('disabled', 'disabled')
}

=======
  event.target.setAttribute('disabled', 'disabled') // uno es el nombre del atributo y el otro el valor.
}   
>>>>>>> 2a5a3ba8476a19352eb5959f5cbaf566995f3663
