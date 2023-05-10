import { Component } from "react";

function Educational({setEducational}) {
    const setSchoolName = (schoolName) => {
        setEducational(oldEducational => 
            ({...oldEducational, schoolName: schoolName})
        )
    }

    const setStudyTitle = (studyTitle) => {
        setEducational(oldEducational => 
            ({...oldEducational, studyTitle: studyTitle})
        )
    }

    const setDateOfStudy = (dateOfStudy) => {
        setEducational(oldEducational => 
            ({...oldEducational, dateOfStudy: dateOfStudy})
        )
    }

     const handleSchoolNameChange = (e) => {
        setSchoolName(e.target.value);
    }

    const handleStudyTitleChange = (e) => {
        setStudyTitle(e.target.value);
    }

    const handleDateOfStudyChange = (e) => {
        setDateOfStudy(e.target.value);
    }


    return (
        <form method='post'>
            <fieldset>
                <legend>Education: </legend>
                <div className='gridRows'>
                    <label htmlFor='schoolName'>Study organization:</label>
                    <input type="text" name='schoolName' placeholder="University of Michigan" onChange={handleSchoolNameChange}></input>
                    <label htmlFor='studyTitle'>Study title:</label>
                    <input type="text" name='studyTitle' placeholder="Software Engineering" onChange={handleStudyTitleChange}></input>
                    <label htmlFor='dateOfStudy'>Date of finishing:</label>
                    <input type="date" name='dateOfStudy' onChange={handleDateOfStudyChange}></input>
                </div>
            </fieldset>
        </form>
    )
}

export default Educational;