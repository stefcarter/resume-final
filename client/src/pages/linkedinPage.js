import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import LinkedinPrintOut from "../linkedinLayouts/linkedinPrintout"



const Linkedin = () => {

    const [LinkedinFormInfo,setcurrentLinkedinForm] = useState ({});


    const handleLinkFormChange = (x) =>{

        console.log(LinkedinFormInfo);
        setcurrentLinkedinForm(preState =>({
            ...preState,
            [x.target.id]: x.target.value
        }))
    }
    
    const exportLinkePDF = async () =>{
        const pdf = new jsPDF("portrait","pt","a4");
        const data = await html2canvas(document.querySelector("#linkedinPDF"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("LinkedinTemplate.pdf");
    }
    // let LinkedinInfo = {}
    return (
        <div className="card bg-white card-rounded w-100 min-90%-vh" id = "bodyHolder">
            <Navbar />
            <div className= "container is-max-widescreen" id="linkedinContainer">
            <h1 className="is-size-1 is-shadowless has-text-centered"> Linkedin Template</h1>
            <h3>Title</h3>
            <input
                id="titleSection"
                className="input is-primary"
                type="text"
                placeholder="Title"
                onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Please insert your job type:</h3>
            <input
                id="jobType"
                className="input is-primary"
                type="text"
                placeholder="Employment Type"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Please insert the current company your work under:</h3>
            <input
                id="currentCompany"
                className="input is-primary"
                type="text"
                placeholder="Company Name"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Please insert your job role:</h3>
            <input
                id="jobRole"
                className="input is-primary"
                type="text"
                placeholder="Current Working Role"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Please insert state date:</h3>
            <input
                id="startDate"
                className="input is-primary"
                type="text"
                placeholder="Start Date"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Please insert date (If currently please insert "current date")</h3>
            <input
                id="endDate"
                className="input is-primary"
                type="value"
                placeholder="End Date"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Use bullet points to label job responsibilities:</h3>
            <input
                id="responSection"
                className="input is-primary"
                type="text"
                placeholder="Job Description"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Title</h3>
            <input
                id="prefSection"
                className="input is-primary"
                type="text"
                placeholder="Preferred Headline"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Skills</h3>
            <input
                id="workSkillsSection"
                className="input is-primary"
                type="text"
                placeholder="Work Related Skills"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Personal Portfolio/Connect URL</h3>
            <input
                id="urlSection"
                className="input is-primary"
                type="text"
                placeholder="Media Links"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Education</h3>
            <input
                id="educationSection"
                className="input is-primary"
                type="text"
                placeholder="Education"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Languages</h3>
            <input
                id="langSection"
                className="input is-primary"
                type="text"
                placeholder="Known Languages"
                 onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <h3>Skills</h3>
            <input
                id="skillsSection"
                className="input is-primary"
                type="text"
                placeholder="Profession Based Skills"
                onChange = {handleLinkFormChange}
            >
            </input>
            &nbsp;
            <button className="button is-success" id="linkedinSubmitBtn"onClick = {exportLinkePDF}>   
                Launch Linkedin PDF
            </button>
            <div id ="captureLinkedin">
                <LinkedinPrintOut LinkedinInfo={LinkedinFormInfo}/>
            </div>

        </div>
        </div>
    );
} 


export default Linkedin;