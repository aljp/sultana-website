import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import ContactForm from "components/contact/ContactForm"
import 'materialize-css';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{ padding: "16px" }}>
        <div className="contactFormWrapper">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}

export default Contact
