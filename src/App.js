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

    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
    this.setDescription = this.setDescription.bind(this);

    this.setSchoolName = this.setSchoolName.bind(this);
    this.setStudyTitle = this.setStudyTitle.bind(this);
    this.setDateOfStudy = this.setDateOfStudy.bind(this);

    this.setCompanyName = this.setCompanyName.bind(this);
    this.setPositionTitle = this.setPositionTitle.bind(this);
    this.setMainTasks = this.setMainTasks.bind(this);
    this.setDateFrom = this.setDateFrom.bind(this);
    this.setDateUntil = this.setDateUntil.bind(this);
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

  setSchoolName(schoolName) {
    this.setState({
      educational: {
        ...this.state.educational,
        'schoolName': schoolName
      }})
  }

  setStudyTitle(studyTitle) {
    this.setState({
      educational: {
        ...this.state.educational,
        'studyTitle': studyTitle
      }})
  }

  setDateOfStudy(dateOfStudy) {
    this.setState({
      educational: {
        ...this.state.educational,
        'dateOfStudy': dateOfStudy
      }})
  }

  setCompanyName(companyName) {
    this.setState({
      practical: {
        ...this.state.practical,
        'companyName': companyName
      }})
  }

  setPositionTitle(positionTitle) {
    this.setState({
      practical: {
        ...this.state.practical,
        'positionTitle': positionTitle
      }})
  }

  setMainTasks(mainTasks) {
    this.setState({
      practical: {
        ...this.state.practical,
        'mainTasks': mainTasks
      }})
  }

  setDateFrom(dateFrom) {
    this.setState({
      practical: {
        ...this.state.practical,
        'dateFrom': dateFrom
      }})
  }

  setDateUntil(dateUntil) {
    this.setState({
      practical: {
        ...this.state.practical,
        'dateUntil': dateUntil
      }})
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

          setSchoolName={this.setSchoolName}
          setStudyTitle={this.setStudyTitle}
          setDateOfStudy={this.setDateOfStudy}

          setCompanyName={this.setCompanyName}
          setPositionTitle={this.setPositionTitle}
          setMainTasks={this.setMainTasks}
          setDateFrom={this.setDateFrom}
          setDateUntil={this.setDateUntil}
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
