import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Linkedin = () => {

    return (
        <div className="card bg-white card-rounded w-100 min-90%-vh" id = "bodyHolder">
            <Navbar />
            <div className= "container is-max-widescreen" id="linkedinContainer">
            <h1 className="is-size-1 is-shadowless has-text-centered"> Linkedin Template</h1>
            <h3>Title</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Title"
            >
            </input>
            &nbsp;
            <h3>Please insert your job type:</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Employment Type"
            >
            </input>
            &nbsp;
            <h3>Please insert the current company your work under:</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Company Name"
            >
            </input>
            &nbsp;
            <h3>Please insert your job role:</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Current Working Role"
            >
            </input>
            &nbsp;
            <h3>Please insert state date:</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Start Date"
            >
            </input>
            &nbsp;
            <h3>Please insert date (If currently please insert "current date")</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="End Date"
            >
            </input>
            &nbsp;
            <h3>Use bullet points to label job responsibilities:</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Job Description"
            >
            </input>
            &nbsp;
            <h3>Title</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Preferred Headline"
            >
            </input>
            &nbsp;
            <h3>Title</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Work Related Skills"
            >
            </input>
            &nbsp;
            <h3>Title</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Media Links"
            >
            </input>
            &nbsp;
            <h3>Education</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Education"
            >
            </input>
            &nbsp;
            <h3>Languages</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Known Languages"
            >
            </input>
            &nbsp;
            <h3>Skills</h3>
            <input
                id="titleSection"
                class="input is-primary"
                type="text"
                placeholder="Profession Based Skills"
            >
            </input>
            &nbsp;
            <button class="button is-success" id="linkedinSubmitBtn">
                Submit
            </button>
        </div>
        </div>
    )
}

export default Linkedin;