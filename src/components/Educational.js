import { Component } from "react";

export default class Educational extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        this.props.submitInfo(formJson.schoolName, formJson.studyTitle, formJson.dateOfStudy);
    }

    render() {
        return (
            <form method='post' onSubmit={this.handleSubmit}>
                <fieldset className="gridFieldset">
                    <legend>Education: </legend>
                    <div className='flexRows'>
                        <label htmlFor='schoolName'>Study organization:</label>
                        <label htmlFor='studyTitle'>Study title:</label>
                        <label htmlFor='dateOfStudy'>Date of finishing:</label>
                    </div>
                    <div className='flexRows'>
                        <input type="text" name='schoolName' placeholder="University of Michigan"></input>
                        <input type="text" name='studyTitle' placeholder="Software Engineering"></input>
                        <input type="date" name='dateOfStudy'></input>
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}