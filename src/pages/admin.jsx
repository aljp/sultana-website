import React from 'react';
import SultanaCms from 'components/SultanaCms';
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHeader from "components/home/LandingHeader"
import WhatWeDoPanel from "components/home/WhatWeDoPanel"
import ServiceCards from "components/home/ServicesCards";
import WhoWeArePanel from "components/home/WhoWeArePanel";
const Admin = props => {

  return (
    <SultanaCms>
      <Layout>
        <SEO title="Home" />
        <LandingHeader />
        <WhoWeArePanel />
        <WhatWeDoPanel />
        <ServiceCards />
      </Layout>
    </SultanaCms>
  )
};

export default Admin;