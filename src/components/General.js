import { Component } from "react";

export default class General extends Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
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

    render() {
        return (
            <form method='post'>
                <fieldset className="gridFieldset">
                    <legend>General information: </legend>
                    <div className='flexRows'>
                        <label htmlFor='name'>Name:</label>
                        <label htmlFor='email'>Email: </label>
                        <label htmlFor='phone'>Phone number:</label>
                    </div>
                    <div className='flexRows'>
                        <input type="text" name='name' placeholder="Name" onChange={this.handleNameChange}></input>
                        <input type="email" name='email' placeholder="example@gmail.com" onChange={this.handleEmailChange}></input>
                        <input type="tel" name='phoneNumber' placeholder="79264058617" onChange={this.handlePhoneNumberChange}></input>
                    </div>
                </fieldset>
            </form>
        )
    }
}