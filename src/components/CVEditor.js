import "../styles/CVEditor.css";
import General from "./General";
import Educational from "./Educational";
import Practical from "./Practical";

function CVEditor(props) {
  return (
    <div className="CVEditor">
      <General setGeneral={props.setGeneral} />
      <Educational setEducational={props.setEducational} />
      <Practical setPractical={props.setPractical} />
    </div>
  );
}

export default CVEditor;
