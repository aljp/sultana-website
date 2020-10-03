import React, { useReducer, useState } from "react"
import { TextInput, Button, Textarea } from "react-materialize"
import axios from "axios"

const reducer = (state, { field, value }) => ({ ...state, [field]: value })

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    description: "",
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleOnChange = (field, value) => {
    dispatch({ field, value })
  }

  const handleOnClick = async event => {
    const API_HOST = "http://localhost:5000"

    if (loading || sent) return

    setLoading(true)
    // let res = await axios.post(`${API_HOST}/contact`, {
    //   name,
    //   email,
    //   subject,
    //   description,
    // })
    let res = await axios({
      method: "POST",
      url: `${API_HOST}/contact`,
      data: {
        name,
        email,
        subject,
        description,
      },
    });
    setLoading(false)

    switch (res.status) {
      case 200:
        setSent(true)
        return
      default:
        return
    }
  }

  const { name, email, subject, description } = state
  return (
    <div className="u-flex u-flexCol ContactForm">
      {sent && <div>Message sent!</div>}
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
