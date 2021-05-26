

window.onload = function(){
    const id = (new URLSearchParams(window.location.search)).get('id')

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
    col.classList = 'col-12 mt-5'
    col.innerHTML = ` <div class="card d-flex mt-5" >
    <div class="card-header text-center">
      ${user.name}
    </div>
    <div class="row">
        <div class="col-6">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: ${user.username}</li>
                <li class="list-group-item">Email: ${user.email}</li>
                <li class="list-group-item">City: ${user.address.city}</li>
                <li class="list-group-item">Site: ${user.address.street}</li>
            </ul>
        </div>
        <div class="col-6">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: ${user.phone}</li>
                <li class="list-group-item">Email: ${user.website}</li>
                <li class="list-group-item">City: ${user.company.name}</li>
                <li class="list-group-item"></li>
            </ul>
        </div>
    </div>
  </div>` 
  const row = document.getElementById('row')
  row.appendChild(col)
}