const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [attendees, setAttendees] = useState("")
  const [preferences, setPreferences] = useState("")
  const [guests, setGuests] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const handleAttendees = (event) => {
    const value = event.target.value

    if (value === "" || Number(value) >= 1) {
      setAttendees(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && email && attendees) {
      setSuccessMessage(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Event RSVP Form</h1>
      <label htmlFor="name">Name:</label>
      <input 
        id="name" 
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text" 
        placeholder="Your name" 
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        value={email}
        onChange={(event) => setEmail(event.target.value)} 
        type="email" 
        placeholder="Your Email" 
        required 
      />
      <br />
      <label htmlFor="attendees">Number of Attendees:</label>
      <input 
        id="attendees" 
        value={attendees}
        onChange={handleAttendees}
        min="1"
        type="number" 
        placeholder="Number of Attendees" 
        required 
      />
      <br />
      <label htmlFor="preferences">Dietary Preferences:</label>
      <input 
        id="preferences" 
        value={preferences}
        onChange={(event) => setPreferences(event.target.value)}
        type="text" 
        placeholder="Dietary Preferences (optional)" 
      />
      <br />
      <label htmlFor="guests">Bringing additional guests?:</label>
      <input 
        type="checkbox" 
        id="guests" 
        checked={guests}
        onChange={() => setGuests(!guests)} 
      />
      <button type="submit">Submit</button>
      {
        successMessage && (
          <div>
            <h2>RSVP Submitted!</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Number of Attendees: {attendees}</p>
            <p>Dietary Preferences: {preferences ? preferences : "No"}</p>
            <p>Bringing Others: {guests ? "Yes" : "No"}</p>
          </div>
        )
      }
    </form>
  )
}