import {loginrequest,loginsuccess,loginerror} from "./authslice"



export  const login =(username,password)=>async(dispatch)=>{
    try{
   dispatch(loginrequest());
   
   //const response = axios.post('http://localhost:3000/login' ,{username,password});
   if (username === 'shiva' && password === 'shiva'){
   dispatch(loginsuccess("yes"));
   }


else 

{
        dispatch (loginerror(  "error in creds"));
        
            }
                }
                catch(err){
            
    dispatch(loginerror("something went wrong"));
                }
   }

export default login;