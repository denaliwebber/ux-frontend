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
  popup.style.visibility = 'visible'
}

const online = document.querySelector('#go-online')
const busy = document.querySelector('#go-busy')
const offline = document.querySelector('#go-offline')
const userstatus = document.querySelector('#user-status')

online.addEventListener('click', function (event) {
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
  popup.style.visibility = 'hidden'
  userstatus.innerHTML = "<i class='fa fa-circle fa-stack-2x status-background-grey'></i><i class='fa fa-times-circle fa-stack-1x icon-color'></i>"
})

offline.addEventListener('mouseover', function (event) {
  offline.style.backgroundColor = '#c9c9c9'
})

offline.addEventListener('mouseout', function (event) {
  offline.style.backgroundColor = 'white'
})

document.addEventListener('click', function(event) {
  var isClickInside = userstatus.contains(event.target)
  if (!isClickInside) {
    popup.style.visibility = 'hidden'
  }
})

const messages = document.querySelectorAll('.inbox-message')
const message = document.querySelector('.inbox-message-long')
const pane = document.getElementById('contact-pane')
const nav = document.getElementById('contact-nav')

function closeContacts() {
  pane.style.width = "0"
  nav.style.marginLeft = "0"
  for (let i = 0; i < messages.length; i++) {
    messages[i].style.width = '85%'
  }
  message.style.width = '85%'
}

function openContacts() {
  pane.style.width = "250px"
  nav.style.marginLeft = "250px"
  for (let i = 0; i < messages.length; i++) {
    messages[i].style.width = '65%'
  }
  message.style.width = '65%'
}
