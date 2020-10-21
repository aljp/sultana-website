import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import ContactForm from "components/contact/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{ padding: "16px", paddingTop: '6vh' }}>
        <div className="row">
          <div className="contactFormWrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
