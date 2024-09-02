import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/layouts/Header";
import { Home } from "./pages/Home";
const App = () => {
const [length , setLength] = useState(8)
const [numberAllowed , setNumberAllowed] = useState(false);
const [charAllowed , setcharAllowed] = useState(false);
const [password , setPassword] = useState("");
const passwordRef = useRef(null);

 let passwordGenerator = useCallback(()=>{
  let pass=''
  let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed) str +='1234567890'
  if(charAllowed) str +='~!@#$%^&*()_+}{:?><'
  for(let i=1; i<=length; i++){
   let ch = Math.floor(Math.random()*str.length+1)
   pass +=str.charAt(ch);
  }
  setPassword(pass)
 },[length, numberAllowed, charAllowed, setPassword])

 let copytoClipBoard = useCallback(()=>{
  passwordRef.current.select()
  // passwordRef.current?.setSelectionRange(0 , 4)
  // passwordRef.current.style.backgroundColor='red'
  // passwordRef.current.style.color='white'
  // passwordRef.current.style.width='200px'
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect(()=>{
  passwordGenerator()
 },[length, numberAllowed, charAllowed])
  return (
    <div className="w-full h-screen bg-black pt-20">
      <div className="w-full max-w-md bg-gray-800 text-orange-600 mx-auto px-3 py-2 rounde-lg">
        <h1 className="text-white text-center rounded-lg pb-2">Password Generator</h1>
        <div className="flex overflow-hidden mb-1 rounded-lg">
           <input 
              type="text"
              placeholder="Password"
              className="w-full outline-none py-1 px-2 font-semibold"
              readOnly
              value={password}
              ref={passwordRef}
           />
           <button onClick={copytoClipBoard} className="bg-blue-600 text-white px-1">Copy</button>
        </div>
        <div className="mt-3 content-center space-x-1">
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="" className="pl-1">length({length})</label>
          <input 
          type="checkbox" 
          defaultValue={numberAllowed}
          onChange={()=>setNumberAllowed(prev=>!prev)}
          />
          <label htmlFor="">Number</label>
          <input 
          type="checkbox" 
          defaultValue={charAllowed}
          onChange={()=>setcharAllowed(prev=>!prev)}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>

      {/* <Header/>  */}
      {/* <Home/> */}
    </div>
  );
};

export default App;
