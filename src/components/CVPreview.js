import { Component } from "react";
import '../styles/CVPreview.css';
import Section from "./Section";

function CVPreview(props) {
    return (
        <div className="CVPreview">
            <h1 className="name">{props.generalInfo.name}</h1>
            <h4 className="contact-details">
                {props.generalInfo.phoneNumber} | <a href={'mailto:'+ props.generalInfo.email}>{props.generalInfo.email}</a>
            </h4>
            <div className="profile-description">{props.generalInfo.description}</div>
            <Section name={'Education'} />
            <div className="flexbox">
                <div>
                    <div className="title">{props.educationalInfo.schoolName}</div>
                    <div className="description">{props.educationalInfo.studyTitle}</div>
                </div>
                <div className="date">{props.educationalInfo.dateOfStudy}</div>
            </div>
            <Section name={'Work experience'} />
            <div className="flexbox">
                <div>
                    <div className="title">{props.practicalInfo.companyName}</div>
                    <div className="description">{props.practicalInfo.positionTitle}</div>
                    <div className="description-detailed">{props.practicalInfo.mainTasks}</div>
                </div>
                <div className="date">{props.practicalInfo.dateFrom} <br></br> {props.practicalInfo.dateUntil}</div>
            </div>
        </div>
    )
}

export default CVPreview;