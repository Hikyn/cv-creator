import { Component } from "react";

export default class Practical extends Component {
    constructor(props) {
        super(props)
    }

    handleCompanyNameChange = (e) => {
        this.props.setCompanyName(e.target.value);
    }

    handlePositionTitleChange = (e) => {
        this.props.setPositionTitle(e.target.value);
    }

    handleMainTasksChange = (e) => {
        this.props.setMainTasks(e.target.value);
    }

    handleDateFromChange = (e) => {
        this.props.setDateFrom(e.target.value);
    }

    handleDateUntilChange = (e) => {
        this.props.setDateUntil(e.target.value);
    }

    render() {
        return (
            <form method='post' onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Practical experience: </legend>
                    <div className='flexRows'>
                        <label htmlFor='companyName'>Company name:</label>
                        <input type="text" name='companyName' placeholder="Company name" onChange={this.handleCompanyNameChange}></input>
                        <label htmlFor='positionTitle'>Position title:</label>
                        <input type="text" name='positionTitle' placeholder="Junior Backend Engineer" onChange={this.handlePositionTitleChange}></input>
                        <label htmlFor='mainTasks'>Main tasks:</label>
                        <textarea type="text" name='mainTasks' placeholder="Mainteined client database" onChange={this.handleMainTasksChange}></textarea>
                        <label htmlFor='dateFrom'>Start date: </label>
                        <input type="date" name='dateFrom' onChange={this.handleDateFromChange}></input>
                        <label htmlFor='phone'>End date: </label>
                        <input type="date" name='dateUntil' onChange={this.handleDateUntilChange}></input>
                    </div>
                </fieldset>
            </form>
        )
    }
}