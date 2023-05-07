import { Component } from "react";
import './CVEditor.css';
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
                <General submitInfo={this.props.setGeneral}/>
                <Educational submitInfo={this.props.setEducational}/>
                <Practical submitInfo={this.props.setPractical}/>
            </div>
        )
    }
}