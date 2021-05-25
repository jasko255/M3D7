// https://jsonplaceholder.typicode.com/users

let fetchedData


const generateCard = (user) => { 
    const col = document.createElement('div')
    col.classList = 'col col-md-4 col-lg-3'
    col.innerHTML = ` <div class="card mb-3" >
    <div class="card-header">
      ${user.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: ${user.username}</li>
      <li class="list-group-item">Email: ${user.email}</li>
      <li class="list-group-item">City: ${user.address.city}</li>
      <li class="list-group-item">Site: ${user.website}</li>
    </ul>
  </div>` 
  return col.outerHTML
}

const display = (data=fetchedData) => { 
    let userCards = data.map(el => generateCard(el))
    document.getElementById('cards').innerHTML = userCards.join('')
}

const filter = (option, input) => {
  let filteredArray = fetchedData.filter(u => u[option].toLowerCase().includes(input.toLowerCase()))
  display(filteredArray)
}


window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      fetchedData = data
      display()
    })
    .catch(err => console.log(err))


    // addeventlistener to input of filter 
    const input = document.getElementById('filterInput')
    input.addEventListener('input', () => {
      const option = document.getElementById('filterOption').value

      filter(option, input.value)
    })
}

const extractNames = () =>  console.log(fetchedData.map(el => el.name).join(', '))
// Victor Plains, Suite 879, Wisokyburgh (90566-7771)

const adresses = () => fetchedData.map(el=> `${el.address.street}, ${el.address.suite}, ${el.address.city} (${el.address.zipcode})` )

