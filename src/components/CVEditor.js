import '../styles/CVEditor.css';
import General from './General';
import Educational from './Educational';
import Practical from './Practical';

function CVEditor(props) {
    return (
        <div className="CVEditor">
            <General 
                setName={props.setName} 
                setEmail={props.setEmail} 
                setPhoneNumber={props.setPhoneNumber}
                setDescription={props.setDescription}
            />
            <Educational 
                setSchoolName={props.setSchoolName}
                setStudyTitle={props.setStudyTitle}
                setDateOfStudy={props.setDateOfStudy}
            />
            <Practical 
                setCompanyName={props.setCompanyName}
                setPositionTitle={props.setPositionTitle}
                setMainTasks={props.setMainTasks}
                setDateFrom={props.setDateFrom}
                setDateUntil={props.setDateUntil}
            />
        </div>
    )
}

export default CVEditor;