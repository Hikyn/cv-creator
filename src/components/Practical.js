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
                <fieldset className="gridFieldset">
                    <legend>Practical experience: </legend>
                    <div className='flexRows'>
                        <label htmlFor='companyName'>Company name:</label>
                        <label htmlFor='positionTitle'>Position title:</label>
                        <label htmlFor='mainTasks'>Main tasks:</label>
                        <label htmlFor='dateFrom'>Start date: </label>
                        <label htmlFor='phone'>End date: </label>
                    </div>
                    <div className='flexRows'>
                        <input type="text" name='companyName' placeholder="Company name"></input>
                        <input type="text" name='positionTitle' placeholder="Junior Backend Engineer"></input>
                        <input type="text" name='mainTasks' placeholder="Mainteined client database"></input>
                        <input type="date" name='dateFrom'></input>
                        <input type="date" name='dateUntil'></input>
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}