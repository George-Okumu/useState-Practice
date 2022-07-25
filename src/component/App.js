import '../App.css';
import Card from './Card';
import NavBar from "./NavBar"
import data from './data';

function App() {
  let levelOfEducation = "NYSC";


  return (
    <div>
      <NavBar/>
      {data.map(student => (
        <Card student={student} educationLevel={levelOfEducation}/>
      ))}
    </div>
  );
}

export default App;
