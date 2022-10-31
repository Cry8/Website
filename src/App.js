import * as React from "react";  
import Stack from './Stack';   
import { BrowserRouter } from "react-router-dom";



export default function App() {
  return(
    <BrowserRouter > 
      <Stack /> 
    </BrowserRouter>
  );
}
