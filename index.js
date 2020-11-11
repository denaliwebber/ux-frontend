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

const popup = document.getElementById("popup-content")

function onClick() {
  console.log('User status symbol was clicked')
  popup.style.visibility = 'visible'
}

const online = document.querySelector('#go-online')
const busy = document.querySelector('#go-busy')
const offline = document.querySelector('#go-offline')
const userstatus = document.querySelector('#user-status')

online.addEventListener('click', function (event) {
  console.log('Switch to online')
  popup.style.visibility = 'hidden'
  userstatus.innerHTML = "<i class='fa fa-circle fa-stack-2x status-background-green'></i><i class='fa fa-check fa-stack-1x icon-color'></i>"
})

online.addEventListener('mouseover', function (event) {
  online.style.backgroundColor = '#c9c9c9'
})

online.addEventListener('mouseout', function (event) {
  online.style.backgroundColor = 'white'
})

busy.addEventListener('click', function (event) {
  console.log('Switch to busy')
  popup.style.visibility = 'hidden'
  userstatus.innerHTML = "<i class='fa fa-circle fa-stack-2x status-background-red'></i><i class='fa fa-circle fa-stack-1x icon-color'></i>"
})

busy.addEventListener('mouseover', function (event) {
  busy.style.backgroundColor = '#c9c9c9'
})

busy.addEventListener('mouseout', function (event) {
  busy.style.backgroundColor = 'white'
})

offline.addEventListener('click', function (event) {
  console.log('Switch to offline')
  popup.style.visibility = 'hidden'
  userstatus.innerHTML = "<i class='fa fa-circle fa-stack-2x status-background-grey'></i><i class='fa fa-times-circle fa-stack-1x icon-color'></i>"
})

offline.addEventListener('mouseover', function (event) {
  offline.style.backgroundColor = '#c9c9c9'
})

offline.addEventListener('mouseout', function (event) {
  offline.style.backgroundColor = 'white'
})
