import React from 'react';
import Img from 'gatsby-image';

const Questionnaire = (props) => {
  const { content, image, currentPage } = props;

  return (
    <>
      <Img fluid={image} className="AboutUs-imageLarge" />
      <div className="col m12 l8 no-padding" id={currentPage}>
        <div className="AboutUs-questionnaire">
          {content.map(({ question, answer }) => (
            <div key={question}>
              <b>{question}</b>
              {answer.map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questionnaire;