import  React, {lazy, Suspense, useContext, useEffect, useReducer} from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Home from './admin/pages/Home';  
import Error from './admin/pages/Error';  
import Logins from './admin/pages/Logins'; 
import Login from './admin/pages/Login'; 
import Reg from "./admin/pages/Reg";
import {  AuthContext, INITIAL_STATE } from "./admin/contexts/AuthContext";
import AuthReducer from "./admin/contexts/AuthReducer";
import axios   from 'axios';  



const Article = lazy(() => import('./admin/pages/Article'))
const Views = lazy(() => import('./admin/pages/Views'))
const WordBucket = lazy(() => import('./admin/pages/WordBucket'))
const Addcode = lazy(() => import('./admin/pages/Addcode'))
const Newsletter = lazy(() => import('./admin/pages/Newsletter'))

export default function Stack() {
  
const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

const { currentUser }  = useContext(AuthContext);

    
// useEffect(() => {
//   axios.get("http://localhost:5001/validate").then((data) => {
//     console.log(data.data)
//     if (data.data.auth == true) {
//       console.log('okay')
//     }else {
//       console.log('not okay')
//     }
//   })
// }, []);

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to='/register' />
  }
  return(
    <>
    <Suspense>
      <Routes> 
        <Route index  element={ 
          <RequireAuth>
            <Home />
          </RequireAuth> } />  
        <Route  path="*" element={  <Error /> } /> 
        
        <Route exact path="/Article" element={ 
          <RequireAuth>
                <Article />
          </RequireAuth>
         } /> 

        <Route exact path="/wordbucket" element={ 
          <RequireAuth>
                <WordBucket />
          </RequireAuth>
         } /> 

        <Route exact path="/Newsletter" element={ 
          <RequireAuth>
                <Newsletter />
          </RequireAuth> 
        } />  
        <Route exact path="/Logins" element={ 
          <RequireAuth>
                <Logins />
          </RequireAuth>
         } />  
        <Route exact path="/Login" element={ <Login /> } />  
         
        <Route exact path="/Views" element={ 
          <RequireAuth>
                <Views />
          </RequireAuth> } />  

        <Route exact path="/coupon" element={ 
          <RequireAuth>
                <Addcode />
          </RequireAuth> } />  
        
        <Route exact path="/register" element={ <Reg /> } />  
      </Routes>
      </Suspense>
    </>
  );
}



