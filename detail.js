

window.onload = function(){
    const id = (new URL(document.location)).searchParams.get('id')
    console.log(id);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let user = data.find(el => el.id == id )
        generateCard(user)  
    })
    .catch(err => console.log(err))

   
}


const generateCard = (user) => { 
    const col = document.createElement('div')
    col.classList = 'col-12'
    col.innerHTML = ` <div class="card d-flex" >
    <div class="card-header">
      ${user.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: ${user.username}</li>
      <li class="list-group-item">Email: ${user.email}</li>
      <li class="list-group-item">City: ${user.address.city}</li>
      <li class="list-group-item">Site: ${user.address.street}</li>
    </ul>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: ${user.phone}</li>
      <li class="list-group-item">Email: ${user.website}</li>
      <li class="list-group-item">City: ${user.company.name}</li>
      <li class="list-group-item"></li>
    </ul>
  </div>` 
  const row = document.getElementById('row')
  row.appendChild(col)
}