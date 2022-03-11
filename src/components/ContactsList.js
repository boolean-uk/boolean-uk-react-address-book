import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

function ContactsList(props) {
  
  const { contacts } = props

  

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <Link to={`/contacts/${contact.id}`} state={{contact}} >View </Link>
              <Link to={`/contacts/add`} state={{contact}} >Edit</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
