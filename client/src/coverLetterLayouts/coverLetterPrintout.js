import React from 'react';

const CoverLetterPrintout = (props) => {
    console.log(props);
    return (

        <div className="card text-center" id="cvPDF">
            <p id="autoInput">Dear</p>
            <h5 className= "is-size-5">
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
                <p id="autoInput">Sincerely,</p>
                <p className="contactInfo">
                    {props.CVInfo.contactInfo}
                </p>
            </div>
        </div>
    );
};

export default CoverLetterPrintout;