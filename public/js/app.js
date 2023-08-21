const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    if (messageOne) {
        messageOne.textContent = 'Loading...'
    } else {
        messageOne = document.createElement('p')
        messageOne.setAttribute('id', 'message-1')
        document.body.appendChild(messageOne)
        messageOne.textContent = 'Loading...'
    }

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.forecast
            }
        })
    })
})
