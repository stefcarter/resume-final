import React from "react";

const LinkedinPrintOut = (props) => {
    console.log(props);
    return(
        <div className = "card text-center" id= "linkedinPDF">
            <h5 id= "Linke1" className ='is-size-5'></h5>
            {props.LinkedinInfo.titleSection}
            <br/>
        <div className = "cardBody">
        <p id= "Linke2" className= "textFieldOne">
        {props.LinkedinInfo.jobType}
        </p>
        <br/>
        <p id= "Linke3" className= "textFieldTwo">
        {props.LinkedinInfo.currentCompany}
        </p>
        <br/>
        <p id= "Linke4" className= "textFieldThree">
        {props.LinkedinInfo.jobRole}
        </p>
        <br/>
        <p id= "Linke5" className= "textFieldFour">
        {props.LinkedinInfo.startDate}
        </p>
        <br/>
        <p id= "Linke6" className= "textFieldFive">
        {props.LinkedinInfo.endDate}
        </p>
        <br/>
        <p id= "Linke7" className= "textFieldSix">
        {props.LinkedinInfo.responSection}
        </p>
        <br/>
        <p id= "Linke8" className= "textFieldSeven">
        {props.LinkedinInfo.prefSection}
        </p>
        <br/>
        <p id= "Linke9" className= "textFieldEight">
        {props.LinkedinInfo.workSkillsSection}
        </p>
        <br/>
        <p id= "Linke10" className= "textFieldNine">
        {props.LinkedinInfo.urlSection}
        </p>
        <br/>
        <p id= "Linke11" className= "textFieldTen">
        {props.LinkedinInfo.educationSection}
        </p>
        <br/>
        <p id= "Linke11" className= "textFieldTen">
        {props.LinkedinInfo.langSection}
        </p>
        <br/>
        <p id= "Linke11" className= "textFieldTen">
        {props.LinkedinInfo.skillsSection}
        </p>
        <br/>
        </div>
        </div>
    );
}
export default LinkedinPrintOut;