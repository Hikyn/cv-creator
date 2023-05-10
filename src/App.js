import './styles/App.css';
import { useState } from 'react';
import CVEditor from './components/CVEditor';
import CVPreview from './components/CVPreview';

function App() {
  const [general, setGeneral] = useState({
    'name': 'Name Surname',
    'email': 'example@gmail.com',
    'phoneNumber': '79264058xxx',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  });

  const [educational, setEducational] = useState({
      'schoolName': 'University of Michigan',
      'studyTitle': 'Software Engineering',
      'dateOfStudy': '2015-05-16'
    });

  const [practical, setPractical] = useState({
      'companyName': 'Company name',
      'positionTitle': 'Junior Backend Engineer',
      'mainTasks': 'Mainteined client database',
      'dateFrom': '2015-07-10',
      'dateUntil': '2020-12-30'
    });

  return (
    <div className="App">
      <CVEditor 
        setGeneral={setGeneral} 

        setEducational={setEducational}

        setPractical={setPractical}
      />
      <CVPreview 
        generalInfo={general} 
        educationalInfo={educational} 
        practicalInfo={practical}
      />
    </div>
  );
}

export default App;
