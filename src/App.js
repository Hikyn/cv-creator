import './App.css';
import { Component } from 'react';
import CVEditor from './components/CVEditor';
import CVPreview from './components/CVPreview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        'name': '',
        'email': '',
        'phoneNumber': ''
      },
      educational: {
        'schoolName': '',
        'studyTitle': '',
        'dateOfStudy': ''
      },
      practical: {
        'companyName': '',
        'positionTitle': '',
        'mainTasks': '',
        'dateFrom': '',
        'dateUntil': ''
      }
    }

    this.setGeneral = this.setGeneral.bind(this);
    this.setEducational = this.setEducational.bind(this);
    this.setPractical = this.setPractical.bind(this);
  }

  setGeneral(name, email, phoneNumber) {
    this.setState({
      general: {
        'name': name,
        'email': email,
        'phoneNumber': phoneNumber
      },
    })
  }

  setEducational(schoolName, studyTitle, dateOfStudy) {
    this.setState({
      educational: {
        'schoolName': schoolName,
        'studyTitle': studyTitle,
        'dateOfStudy': dateOfStudy
      },
    })
  }

  setPractical(companyName, positionTitle, mainTasks, dateFrom, dateUntil) {
    this.setState({
      practical: {
        'companyName': companyName,
        'positionTitle': positionTitle,
        'mainTasks': mainTasks,
        'dateFrom': dateFrom,
        'dateUntil': dateUntil
      },
    })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state)}
        <CVEditor 
          setGeneral={this.setGeneral} 
          setEducational={this.setEducational} 
          setPractical={this.setPractical}
        />
        <CVPreview />
      </div>
    );
  }
}

export default App;