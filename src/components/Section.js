import { Component } from "react";
import '../styles/Section.css';

export default class Section extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Section">
                <div className="section-title">
                    {this.props.name}
                </div>
                <hr></hr>
            </div>
            
        )
    }
}