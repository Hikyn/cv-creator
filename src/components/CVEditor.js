import { Component } from "react";
import '../styles/CVEditor.css';
import General from './General';
import Educational from './Educational';
import Practical from './Practical';

export default class CVEditor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="CVEditor">
                <General 
                    setName={this.props.setName} 
                    setEmail={this.props.setEmail} 
                    setPhoneNumber={this.props.setPhoneNumber}
                    setDescription={this.props.setDescription}
                />
                <Educational submitInfo={this.props.setEducational}/>
                <Practical submitInfo={this.props.setPractical}/>
            </div>
        )
    }
}