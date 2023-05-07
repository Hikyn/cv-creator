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
                <fieldset>
                    <legend>General information: </legend>
                    <label>
                        Study organization: 
                        <input type="text" name='schoolName' placeholder="University of Michigan"></input>
                    </label>
                    <label>
                        Study title: 
                        <input type="text" name='studyTitle' placeholder="Software Engineering"></input>
                    </label>
                    <label>
                        Date of finishing: 
                        <input type="date" name='dateOfStudy'></input>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}