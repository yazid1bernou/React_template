import  {BrowserRouter , Routes,  Route } from 'react-router-dom'

import Navbar  from './Components/Navbar'; 
import Index  from './Components/Index'; 
import Contact  from './Components/Contact'; 
import Example from './Components/Example';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
             <Navbar />
             <Routes>
                 <Route exact path="/" element={<Index/>} />
                 <Route exact path="/contact" element={<Contact/>} />
                 <Route exact path ="/example" element={<Example/>} />
             </Routes> 
            
          
            
        </BrowserRouter>
      
    </div>
  );
}

export default App;


