import { Component } from "react";

export default class Practical extends Component {
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

        this.props.submitInfo(
            formJson.companyName, 
            formJson.positionTitle, 
            formJson.mainTasks, 
            formJson.dateFrom, 
            formJson.dateUntil);
    }

    render() {
        return (
            <form method='post' onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Practical experience: </legend>
                    <label>
                        Company name: 
                        <input type="text" name='companyName' placeholder="Company name"></input>
                    </label>
                    <label>
                        Position title: 
                        <input type="text" name='positionTitle' placeholder="Junior Backend Engineer"></input>
                    </label>
                    <label>
                        Main tasks: 
                        <input type="text" name='mainTasks' placeholder="Mainteined client database"></input>
                    </label>
                    <label>
                        Start date: 
                        <input type="date" name='dateFrom'></input>
                    </label>
                    <label>
                        End date: 
                        <input type="date" name='dateUntil'></input>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}