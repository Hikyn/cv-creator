import { Component } from "react";

export default class Educational extends Component {
    constructor(props) {
        super(props)
    }

    handleSchoolNameChange = (e) => {
        this.props.setSchoolName(e.target.value);
    }

    handleStudyTitleChange = (e) => {
        this.props.setStudyTitle(e.target.value);
    }

    handleDateOfStudyChange = (e) => {
        this.props.setDateOfStudy(e.target.value);
    }


    render() {
        return (
            <form method='post'>
                <fieldset>
                    <legend>Education: </legend>
                    <div className='flexRows'>
                        <label htmlFor='schoolName'>Study organization:</label>
                        <input type="text" name='schoolName' placeholder="University of Michigan" onChange={this.handleSchoolNameChange}></input>
                        <label htmlFor='studyTitle'>Study title:</label>
                        <input type="text" name='studyTitle' placeholder="Software Engineering" onChange={this.handleStudyTitleChange}></input>
                        <label htmlFor='dateOfStudy'>Date of finishing:</label>
                        <input type="date" name='dateOfStudy' onChange={this.handleDateOfStudyChange}></input>
                    </div>
                </fieldset>
            </form>
        )
    }
}