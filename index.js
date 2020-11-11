const books = document.querySelector('#book-container')
const dashboard = document.querySelector('#dashboard-container')
const calendar = document.querySelector('#calendar-container')

books.addEventListener('mouseover', function (event) {
  books.style.backgroundColor = '#004718'
})

books.addEventListener('mouseout', function (event) {
  books.style.backgroundColor = '#005c02'
})

dashboard.addEventListener('mouseover', function (event) {
  dashboard.style.backgroundColor = '#004718'
})

dashboard.addEventListener('mouseout', function (event) {
  dashboard.style.backgroundColor = '#005c02'
})

calendar.addEventListener('mouseover', function (event) {
  calendar.style.backgroundColor = '#004718'
})

calendar.addEventListener('mouseout', function (event) {
  calendar.style.backgroundColor = '#005c02'
})
