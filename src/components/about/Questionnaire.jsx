import React from 'react';

const Questionnaire = (props) => {
  const { content, page } = props;
  const { fullName, role, questionnaire } = content;

  return (
    <div id={page} className="u-flex u-flexCol u-flexAlignItemsCenter">
      <div style={{ textAlign: 'center' }}>
        <h4><b>{fullName}</b></h4>
        <p><small>{role}</small></p>
      </div>
      <div className="col l12" style={{margin: 'auto'}}>
        <div className="AboutUs-questionnaire">
          {questionnaire.map(({ question, answer }) => (
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
