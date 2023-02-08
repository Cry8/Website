import  React, { Suspense, useContext, lazy} from "react";
import { Routes, Route, Navigate,  } from "react-router-dom"; 
import Error from './admin/pages/Error';  
import Login from './admin/pages/Login'; 
import Reg from "./admin/pages/Reg";
import {  AuthContext } from "./admin/contexts/AuthContext";
import Loader from "./admin/components/Loader";
import ProfileUpdate from './admin/pages/ProfileUpdate'
import Newsletter from './admin/pages/Newsletter'
import Addcode from './admin/pages/Addcode'
import WordBucket from './admin/pages/WordBucket'
import Views from   './admin/pages/Views'
import Session from   './admin/pages/Session'
const Article = lazy(() => import('./admin/pages/Article'));
const Home = lazy(() => import('./admin/pages/Home'));


export default function Stack() {

const { currentUser }  = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to='/login' />
  }
  return(
    <>
        <Suspense fallback={<Loader />}>
          <Routes> 
          <Route index   element={ <Login /> } />  

            <Route  path="/dashboard"  element={ 
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

            <Route exact path="/profileUpdate" element={ 
              <RequireAuth>
                    <ProfileUpdate />
              </RequireAuth> 
            } />  
            <Route exact path="/Session-expired" element={ 
                    <Session />
            } />  
            
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



