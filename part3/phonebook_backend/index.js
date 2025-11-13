const express = require("express")
const app = express()
app.use(express.json())


let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get("/info", (request, response) => {
    total_contact = persons.length
    const date_and_time = new Date
    response.send(
        `<p>Phonebook has info for ${total_contact} people </p> <p>${date_and_time}</P>`
        
    )
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})


app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end("Person not found")
    }
})

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end("Person deleted")
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)