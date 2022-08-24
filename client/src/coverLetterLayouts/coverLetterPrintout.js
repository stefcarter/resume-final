import React from 'react';

const coverLetterPrintout = (props) => {

    return (

        <div className="card text-center">
            <h5 className= "is-size-3" style="companyName">
            {props.CVInfo.greetings}
            </h5>
            <div className="cardBody">
                <p className="cardParagraphOne">
                {props.CVInfo.introParagraph}
                </p>
                <p className="cardParagraphTwo">
                {props.CVInfo.middleParagraph}
                </p>
                <p className="cardParagraphThree">
                {props.CVInfo.closingParagraph}
                </p>
            </div>
        </div>
    );
};

export default coverLetterPrintout;