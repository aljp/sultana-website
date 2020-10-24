import React from 'react';
import Layout from 'components/layout';
import ServicesPageTemplate from 'components/service-template/ServicesPageTemplate';
import 'styling/services-template.scss';

const DevelopmentPage = (props) => (
  <Layout className="services-page">
    <ServicesPageTemplate />
  </Layout>
);

export default DevelopmentPage;
