import React, { useState, useReducer } from 'react';
import axios from "axios"
import BackgroundImage from 'gatsby-background-image';
import TextInput from 'components/form-helpers/TextInput';
import Button from 'components/form-helpers/Button'
import { API_HOST } from '../../config'

const reducer = (state, { field, value }) => ({ ...state, [field]: value })

const ServicesPageContactUs = (props) => {
  const { image } = props;

  const initialState = {
    name: "",
    email: "",
    phone: "",
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { name, email, phone } = state

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleOnChange = (field, value) => {
    dispatch({ field, value })
  }

  const handleOnSubmit = async event => {
    if (loading || sent) return

    setLoading(true)

    let res = await axios({
      method: "POST",
      url: `${API_HOST}/contact`,
      data: { ...state},
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

  return (
    <div className="ServicesPageContactUs">
      <BackgroundImage fluid={image} className="ServicesPageContactUs-image u-flex u-flexAlignItemsCenter">
        <div className="container u-flex u-flexCol u-flexJustifyCenter">
          <div className="ServicesPageContactUs-header">
            <div className="topper">
              <h2 className="title-period">
                Get in touch
              </h2>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus officiis dolorem in sit! Quo veritatis quae necessitatibus aperiam veniam omnis ipsam autem minus, quaerat, qui eos nobis cumque aliquam!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium asperiores nulla minus dolorum eius iste, nam facilis omnis accusamus velit fugiat earum ipsa facere quis voluptas quaerat. Incidunt, harum excepturi?
          </p>
          <div className="u-flex u-flexJustifyBetween" style={{ width: '100%' }}>
            <TextInput
              label="Name"
              value={name}
              onChange={event => handleOnChange("name", event.target.value)}
            />
            <TextInput
              label="Phone number"
              value={phone}
              onChange={event => handleOnChange("phone", event.target.value)}
            />
            <TextInput
              label="Email"
              value={email}
              onChange={event => handleOnChange("email", event.target.value)}
              type="email"
            />
          </div>
          <div>
            <Button
              type="submit"
              onClick={handleOnSubmit}
            >
              Send
            </Button>
          </div>
        </div>
        <div className="overlay" />
      </BackgroundImage>
    </div>
  );
};

export default ServicesPageContactUs;