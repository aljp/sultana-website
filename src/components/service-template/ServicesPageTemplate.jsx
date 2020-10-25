import React from 'react';
import ServicesPageHeader from 'components/service-template/ServicesPageHeader';
import ServicesPageAdvantages from 'components/service-template/ServicesPageAdvantages';
import ServicesPageConsultation from 'components/service-template/ServicesPageConsultation';
import ServicesPageBreakdown from 'components/service-template/ServicesPageBreakdown';
import ServicesPageContactUs from 'components/service-template/ServicesPageContactUs';

const ServicesPageTemplate = (props) => {
  const { data, images, iconMap } = props;

  return (
    <>
      <ServicesPageHeader data={data.header} backgroundImage={images.headerBackground.childImageSharp.fluid} />
      <ServicesPageAdvantages data={data.advantages} iconMap={iconMap} />
      <ServicesPageConsultation data={data.shared.consultation} image={images.consultationBackground.childImageSharp.fluid} />
      <ServicesPageBreakdown data={data.breakdown} image={images.lifeCycleImage.childImageSharp.fluid}/>
      <ServicesPageContactUs image={images.contactUsImage.childImageSharp.fluid}/>
    </>
  )
};

export default ServicesPageTemplate;