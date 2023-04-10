import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import {StateContext} from "../context/StateContext";


function MyApp({ Component, pageProps }) {
  
 
  
  return (
  <StateContext>
          
   
    
          
         
          <Component {...pageProps} />
  </StateContext>
  
  )

}

export default MyApp
