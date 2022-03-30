const input = document.querySelector('#message')
const button = document.querySelector('#submitBtn')
const message = document.querySelector('.message-content')
const feedback = document.querySelector('.feedback')

button.addEventListener('click', (event) => {
  event.preventDefault()

  if (input.value === '') {
    feedback.style.display = 'block'
    
    setTimeout(() => {
      feedback.style.display = 'none'
    }, 2000)
  } else {
    message.textContent = input.value
    input.value = ""
  }
})


