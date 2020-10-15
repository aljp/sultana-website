import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import ContactForm from "components/contact/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{ padding: "16px" }}>
        <div className="row">
          <div className="contactFormWrapper col s12 m6 offset-m3">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
