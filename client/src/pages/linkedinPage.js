import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import Navbar from "../components/Navbar";
const Linkedin = () => {
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache",
    })

return (
    <div className="card bg-white card-rounded w-100 min-90%-vh">
        <Navbar/>
        <h1>Linkedin Profile</h1>
        <h3>Title</h3>
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Title"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Employment Type"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Company Name"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Current Working Role"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Start Date"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="End Date"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Job Description"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Preferred Headline"
        >
        </input>
        &nbsp;
        <input 
        id="titleSection"
        class="input is-primary"
        type="text"
        placeholder="Work Related Skills"
        >
        </input>
        &nbsp;
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
    <button class="button is-success" id="">
        Submit
    </button>
    </div>
)
}

export default Linkedin;