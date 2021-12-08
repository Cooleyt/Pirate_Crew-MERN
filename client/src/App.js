import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPirate from './views/AddPirate';
import Main from './views/Main';
import SinglePirate from './views/SinglePirate';
import EditPirate from './views/EditPirate';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div class name="header">
      <Link to ="/" class="text-dark" href="#"><h1>The Crew</h1></Link>
        <Link to ="/api/pirates/new" class="text-dark" href="#"><h5>Add a Pirate</h5></Link>
      </div>
        <Routes>
          {/* NEW FORMAT FOR ROUTES */}
          <Route path="/" element={<Main/>}/>

          <Route path ="/api/pirates/new" element={<AddPirate/>}/>

          <Route path ="/pirates/:_id" element={<SinglePirate/>}/>

          <Route path ="/pirates/update/:_id" element={<EditPirate/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
