import { Component } from "react";
import '../styles/CVPreview.css';
import Section from "./Section";

export default class CVPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="CVPreview">
                <h1 className="name">{this.props.generalInfo.name}</h1>
                <h4 className="contact-details">
                    {this.props.generalInfo.phoneNumber} | <a href={'mailto:'+ this.props.generalInfo.email}>{this.props.generalInfo.email}</a>
                </h4>
                <Section name={'Education'} />
                <div className="flexbox">
                    <div>
                        <div className="title">{this.props.educationalInfo.schoolName}</div>
                        <div className="description">{this.props.educationalInfo.studyTitle}</div>
                    </div>
                    <div className="date">{this.props.educationalInfo.dateOfStudy}</div>
                </div>
                <Section name={'Work experience'} />
                <div className="flexbox">
                    <div>
                        <div className="title">{this.props.practicalInfo.companyName}</div>
                        <div className="description">{this.props.practicalInfo.positionTitle}</div>
                        <div className="description-detailed">{this.props.practicalInfo.mainTasks}</div>
                    </div>
                    <div className="date">{this.props.practicalInfo.dateFrom} <br></br> {this.props.practicalInfo.dateUntil}</div>
                </div>
            </div>
        )
    }
}