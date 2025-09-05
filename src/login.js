import {React,useEffect} from 'react';
import './login.css';
import {} from 'react-router-dom';
import login from './authactions';
import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
function Login(){
    const {authenticationin,error} = useSelector((state) => state.auth);
    const[activetab,setactivetab] = useState("");
console.log(authenticationin);
    const [creds,setcreds]= useState({username:"",password: ""});
    const dispatch = useDispatch();
const navigate = useNavigate();
const submithandler = (e)=>{

    e.preventDefault();


dispatch(login(creds.username,creds.password,));
}
useEffect(()=>{
if (authenticationin)
{

    navigate('/home');
}
},[authenticationin,navigate])

    return(

            <div className = 'container'>
                
             <div className = 'creds'>
        <input className = 'box' name = 'loginname' value={creds.username} type="text" placeholder='login...' onChange={(e)=>setcreds({...creds, username: e.target.value})}/>
        <input className = 'box' name = 'password' value={creds.password} type="text" placeholder='password...'onChange = {(e)=>setcreds({...creds, password: e.target.value})} />
        <div className= 'btnbox'>
        <button onClick = {submithandler} className= 'btn'>Login</button>
          <button className = 'btn' onClick = {() => setactivetab("reg")}>Register</button>
        {activetab === "reg" && (
            <div className="overlay">
            <div className = "register">
            <input className="textbox"  type="text" name="name"></input>
            <input  className="textbox" type="text" name="lastname"></input>
            </div>
        </div>
        )}
        <div>
            {error}
        </div>
        </div>
        </div>
        
      </div>
      
    
    )
}
export default Login;