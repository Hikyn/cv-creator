import { Component } from "react";
import '../styles/Section.css';

function Section({name}) {
    return (
        <div className="Section">
            <div className="section-title">
                {name}
            </div>
            <hr></hr>
        </div>
    )
}

export default Section;