// Handles the right pane hovering
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

// Handles the status popup
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

// Handles when user clicks outside status popup window
document.addEventListener('click', function(event) {
  var isClickInside = userstatus.contains(event.target)
  if (!isClickInside) {
    popup.style.visibility = 'hidden'
  }
})

// Handles shortening message width when contact pane is opened and width of contact pane
const messages = document.querySelectorAll('.inbox-message')
const stars = document.querySelectorAll('.favorites-icon')
const message = document.querySelector('.inbox-message-long')
const longMessage = document.querySelector('#long-message')
const messageContent = document.querySelectorAll('.message')
// full contact pane
const pane = document.getElementById('contact-pane')
// closing button
const nav = document.getElementById('contact-nav')
const recepients = document.querySelectorAll('.recepient')

function closeContacts() {
  pane.style.width = "0"
  nav.style.marginLeft = "0"
  for (let i = 0; i < messages.length; i++) {
    messages[i].style.width = '85%'
  }
  message.style.width = '85%'
  longMessage.innerHTML = 'Hi, I wanted to reach out to all students in the course about their midterm essay plan.  I will be conducting 1-1 meetings next week, please...'
  longMessage.style.left = '0%'
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.left = '6%'
  }
  for (let i = 0; i < messageContent.length; i++) {
    messageContent[i].style.left = '0%'
  }
  for (let i = 0; i < recepients.length; i++) {
    recepients[i].style.paddingLeft = '0%'
  }
}

function openContacts() {
  pane.style.width = "250px"
  nav.style.marginLeft = "250px"
  for (let i = 0; i < messages.length; i++) {
    messages[i].style.width = '65%'
  }
  message.style.width = '65%'
  longMessage.innerHTML = 'Hi, I wanted to reach out to all students in the course about their midterm essay plan.  I will be conducting...'
  longMessage.style.left = '3%'
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.left = '8%'
  }
  for (let i = 0; i < messageContent.length; i++) {
    messageContent[i].style.left = '3%'
  }
  for (let i = 0; i < recepients.length; i++) {
    recepients[i].style.paddingLeft = '3%'
  }
}
