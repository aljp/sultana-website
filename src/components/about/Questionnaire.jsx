import React from 'react';
import Img from 'gatsby-image';

const Questionnaire = (props) => {
  const { content, image, page } = props;

  return (
    <div id={page} className="u-flex u-flexCol u-flexAlignItemsCenter">
      <Img fluid={image} className="AboutUs-imageLarge" />
      <div className="col l12" style={{margin: 'auto'}}>
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
    </div>
  );
};

export default Questionnaire;
