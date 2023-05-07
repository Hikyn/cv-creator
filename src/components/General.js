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
                <fieldset>
                    <legend>General information: </legend>
                    <label>
                        Name: 
                        <input type="text" name='name' placeholder="Alice"></input>
                    </label>
                    <label>
                        Email: 
                        <input type="email" name='email' placeholder="example@gmail.com"></input>
                    </label>
                    <label>
                        Phone number: 
                        <input type="phone" name='phoneNumber' placeholder="79264058617"></input>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}