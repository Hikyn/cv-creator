import { Component } from "react";

export default class General extends Component {
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

        this.props.submitInfo(formJson.name, formJson.email, formJson.phoneNumber);
    }

    render() {
        return (
            <form method='post' onSubmit={this.handleSubmit}>
                <fieldset className="gridFieldset">
                    <legend>General information: </legend>
                    <div className='flexRows'>
                        <label htmlFor='name'>Name:</label>
                        <label htmlFor='email'>Email: </label>
                        <label htmlFor='phone'>Phone number:</label>
                    </div>
                    <div className='flexRows'>
                        <input type="text" name='name' placeholder="Name"></input>
                        <input type="email" name='email' placeholder="example@gmail.com"></input>
                        <input type="tel" name='phoneNumber' placeholder="79264058617"></input>
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}