import './styles/App.css';
import { Component } from 'react';
import CVEditor from './components/CVEditor';
import CVPreview from './components/CVPreview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        'name': 'Name Surname',
        'email': 'example@gmail.com',
        'phoneNumber': '79264058xxx',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      educational: {
        'schoolName': 'University of Michigan',
        'studyTitle': 'Software Engineering',
        'dateOfStudy': '2015-05-16'
      },
      practical: {
        'companyName': 'Company name',
        'positionTitle': 'Junior Backend Engineer',
        'mainTasks': 'Mainteined client database',
        'dateFrom': '2015-07-10',
        'dateUntil': '2020-12-30'
      }
    }

    this.setEducational = this.setEducational.bind(this);
    this.setPractical = this.setPractical.bind(this);
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setName(name) {
    this.setState({
      general: {
        ...this.state.general,
        'name': name
      }})
  }

  setEmail(email) {
    this.setState({
      general: {
        ...this.state.general,
        'email': email
      }})
  }

  setPhoneNumber(phoneNumber) {
    this.setState({
      general: {
        ...this.state.general,
        'phoneNumber': phoneNumber
      }})
  }

  setDescription(description) {
    this.setState({
      general: {
        ...this.state.general,
        'description': description
      }})
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
        <CVEditor 
          setName={this.setName} 
          setEmail={this.setEmail} 
          setPhoneNumber={this.setPhoneNumber}
          setDescription={this.setDescription}

          setEducational={this.setEducational} 
          setPractical={this.setPractical}
        />
        <CVPreview 
          generalInfo={this.state.general} 
          educationalInfo={this.state.educational} 
          practicalInfo={this.state.practical}
        />
      </div>
    );
  }
}

export default App;
