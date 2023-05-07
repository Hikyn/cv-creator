import { Component } from "react";

export default class General extends Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleNameChange(e) {
        this.props.setName(e.target.value);
    }

    handleEmailChange(e) {
        this.props.setEmail(e.target.value);
    }

    handlePhoneNumberChange(e) {
        this.props.setPhoneNumber(e.target.value);
    }

    handleDescriptionChange(e) {
        this.props.setDescription(e.target.value);
    }

    render() {
        return (
            <form method='post'>
                <fieldset>
                    <legend>General information: </legend>
                    <div className='flexRows'>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name='name' placeholder="Name Surname" onChange={this.handleNameChange}></input>
                        <label htmlFor='email'>Email: </label>
                        <input type="email" name='email' placeholder="example@gmail.com" onChange={this.handleEmailChange}></input>
                        <label htmlFor='phone'>Phone number:</label>
                        <input type="tel" name='phoneNumber' placeholder="79264058617" onChange={this.handlePhoneNumberChange}></input>
                        <label htmlFor='description'>Description:</label>
                        <textarea type="text" name='description' onChange={this.handleDescriptionChange}></textarea>
                    </div>
                </fieldset>
            </form>
        )
    }
}