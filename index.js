var books = document.querySelector('#book-container')

books.addEventListener('mouseover', function (event) {
  event.target.style.backgroundColor = '#004718'
})

books.addEventListener('mouseout', function (event) {
  event.target.style.backgroundColor = '#005c02'
})
