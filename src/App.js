

import  Home  from './pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ViewCategory from './pages/ViewCategory';
import Planform from './pages/Planform';
import Login from './pages/Login';
import Map from './pages/Map';
import PlanDisplay from './pages/PlanDisplay';
import RegisterUser from './pages/RegisterUser';
import AdminUpdate from './pages/AdminUpdate';
import AdminDashboard from './pages/AdminDashboard';
import CoustomerDetails from './pages/CoustomerDetails';
import LogInn from './pages/LogInn';
import { authentication } from './firebase-config';
import Confirmplan from './pages/Confirmplan';
import Hiw from './pages/Hiw';
import WhyAnno from './pages/WhyAnno';
import AdminLogin from './pages/AdminLogin';

//import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <div>
      
      <Router>
      <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/viewcategory' element={< ViewCategory  />} /> 
      <Route path='/plan' element={ <Planform/>} />
      <Route path='/confirm' element={<Confirmplan/>} />
      <Route path='/login' element={ <Login/> } />
      <Route path='/register' element={ <LogInn/> } /> 
      <Route path='/map' element={ <Map/> } />
      <Route path='/plan-display' element={ <PlanDisplay/> } />
      <Route path='/how-it-works' element={ <Hiw/> } />
      <Route path='/why-anno' element={ <WhyAnno/> } />
      <Route path='/admin-update' element={ <AdminUpdate/> }/>
      <Route path='/admin-dashboard' element={ <AdminDashboard/>} />
      <Route path='/user-details' element={< CoustomerDetails/>}/>
      <Route path='/admin-login' element={<AdminLogin/>} />
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
