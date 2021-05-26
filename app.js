// https://jsonplaceholder.typicode.com/users

let fetchedData
let lastData


const generateCard = (user) => { 
    const col = document.createElement('div')
    col.classList = 'col col-md-4 col-lg-3'
    col.innerHTML = `<a href='./detail.html?id=${user.id}' target= '_blank'> <div class="card mb-3" >
    <div class="card-header">
      ${user.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: ${user.username}</li>
      <li class="list-group-item">Email: ${user.email}</li>
      <li class="list-group-item">City: ${user.address.city}</li>
      <li class="list-group-item">Site: ${user.website}</li>
    </ul>
  </div> </a>` 
  return col.outerHTML
}

const display = (data=fetchedData) => { 
    let userCards = data.map(el => generateCard(el))
    document.getElementById('cards').innerHTML = userCards.join('')
}

const filter = (option, input) => {
  let filteredArray = fetchedData.filter(u => u[option].toLowerCase().includes(input.toLowerCase()))
  lastData = filteredArray
  display(filteredArray)
}

const sortFunc = (user1, user2) => {
  let name1 = user1.name.toUpperCase(); // ignore upper and lowercase
  let name2 = user2.name.toUpperCase(); // ignore upper and lowercase
  if (name1 < name2) {
    return -1;
  }
  if (name1 > name2) {
    return 1;
  }
  return 0;
}

const sortByName = () => {
  const sorted = JSON.stringify(lastData) == JSON.stringify([...lastData].sort((a,b) => sortFunc(a, b)))

  const svg = document.getElementById('svgSorted')

  if(sorted) {
    svg.innerHTML = `<path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
    <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
    <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>`
  } else {
    svg.innerHTML = `<path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
    <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>` 
  }

  const sortedArray = sorted ? lastData.reverse() : lastData.sort((a,b) => sortFunc(a, b))
  display(sortedArray)
} 


window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      fetchedData = data
      lastData = data
      display()
    })
    .catch(err => console.log(err))


    // addeventlistener to input of filter 
    const input = document.getElementById('filterInput')
    input.addEventListener('input', () => {
      const option = document.getElementById('filterOption').value
      filter(option, input.value)
    })

    // addeventlistener to sort button
    const sortBtn = document.getElementById('sort')
    sortBtn.addEventListener('click', () => sortByName())
}

const extractNames = () =>  console.log(fetchedData.map(el => el.name).join(', '))
// Victor Plains, Suite 879, Wisokyburgh (90566-7771)

const adresses = () => fetchedData.map(el=> `${el.address.street}, ${el.address.suite}, ${el.address.city} (${el.address.zipcode})` )

