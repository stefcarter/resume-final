import React from 'react';

const CoverLetterPrintout = (props) => {
    console.log(props);
    return (

        <div className="card text-center" id="cvPDF">
            <p id="autoInput">Dear</p>
            <h5 id="cover1" className= "is-size-6">
            {props.CVInfo.greetings}
            <br></br>
            </h5>
            <div className="cardBody">
                <p id="cover2" className="cardParagraphOne">
                {props.CVInfo.introParagraph}
                </p>
                <br></br>
                <p id="cover3" className="cardParagraphTwo">
                {props.CVInfo.middleParagraph}
                </p>
                <br>
                </br>
                <p id="cover4" className="cardParagraphThree">
                {props.CVInfo.closingParagraph}
                </p>
                <br>
                </br>
                <p id="autoInput">Sincerely,</p>
                <p id="cover5" className="contactInfo">
                    {props.CVInfo.contactInfo}
                </p>
            </div>
        </div>
    );
};

export default CoverLetterPrintout;