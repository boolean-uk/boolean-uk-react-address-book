import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ContactsView() {
  const [contact, setContact] = useState(false)
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/contacts/${params.id}`)
    .then((res) => res.json())
    .then((data) => setContact(data))
  }, [params])

  if (!contact) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street} {contact.city}</p>
      <br></br>
      <h4>Contact details:</h4>
      <br></br>
      <p><strong>{contact.contact}:</strong></p>
      <p>{contact.contactDetails}</p>
    </div>
  )
}

export default ContactsView