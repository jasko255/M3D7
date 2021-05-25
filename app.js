// https://jsonplaceholder.typicode.com/users

const generateCard = (user) => { 
    const col = document.createElement('div')
    col.classList = 'col col-md-4 col-lg-3'
    col.innerHTML = ` <div class="card mb-3" >
    <div class="card-header">
      ${user.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: ${user.email}</li>
      <li class="list-group-item">City: ${user.address.city}</li>
      <li class="list-group-item">Site: ${user.website}</li>
    </ul>
  </div>` 
  return col.outerHTML
    


}

const display = (data) => { 
    let userCards = data.map(el => generateCard(el))
    document.getElementById('cards').innerHTML = userCards.join('')
}

window.onload = function(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => display(data))
    .catch(err => console.log(err))
}