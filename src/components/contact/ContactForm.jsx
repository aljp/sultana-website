import React, { useReducer, Fragment } from "react"
import { TextInput, Button, Textarea } from "react-materialize"

const reducer = (state, { field, value }) => ({ ...state, [field]: value })

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    description: "",
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOnChange = (field, value) => {
    dispatch({ field, value })
  }
  const handleOnClick = (event) => {
    // TODO: Handle contact form on click
  };
  const { name, email, subject, description } = state
  return (
    <div className="u-flex u-flexCol ContactForm">
      <h5>
        Let us know how we can help <i>you</i>
      </h5>
      <TextInput
        label="Name"
        value={name}
        onChange={event => handleOnChange("name", event.target.value)}
      />
      <TextInput
        label="Email"
        value={email}
        onChange={event => handleOnChange("email", event.target.value)}
      />
      <TextInput
        label="Subject"
        value={subject}
        onChange={event => handleOnChange("subject", event.target.value)}
      />
      <Textarea
        label="Description"
        value={description}
        onChange={event => handleOnChange("description", event.target.value)}
      />
      <div>
        <Button onClick={handleOnClick}>Contact Us</Button>
      </div>
    </div>
  )
}

export default ContactForm
