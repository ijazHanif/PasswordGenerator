import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [customSymbols, setCustomSymbols] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [strength, setStrength] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [multiGenerate, setMultiGenerate] = useState(1);
  const passwordRef = useRef(null);

  const evaluateStrength = (password) => {
    // Implement a function to evaluate password strength
    // Example: If password has length > 12 and includes numbers, symbols, etc., set strength to "Strong"
  };

  const passwordGen = useCallback(() => {
    let passList = [];
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += customSymbols || '`!@#$%^&*()_{}[]";:?/><,~';
    if (excludeSimilar) str = str.replace(/[O0Il1]/g, ""); // Example for excluding similar characters

    for (let j = 0; j < multiGenerate; j++) {
      let pass = "";
      for (let i = 1; i <= length; i++) {
        let ch = Math.floor(Math.random() * str.length);
        pass += str.charAt(ch);
      }
      passList.push(pass);
      evaluateStrength(pass);
    }
    setPasswords(passList);
  }, [length, number, char, customSymbols, excludeSimilar, multiGenerate]);

  useEffect(() => {
    passwordGen();
  }, [length, number, char, customSymbols, excludeSimilar, multiGenerate]);

  const copytoClipboard = (password) => {
    passwordRef.current.value = password;
    passwordRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div className={`w-full h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black "}`}>
      <div className="flex justify-center items-center h-screen">
        <div className={`${darkMode ? "bg-gray-800" : "bg-gray-300"} py-6 px-6 rounded-lg`}>
          <div className="flex justify-between">
            <label htmlFor="darkModeToggle">Dark Mode</label>
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          </div>
          {passwords.map((pass, index) => (
            <div key={index} className="flex rounded-lg overflow-hidden mb-2">
              <input
                type={showPassword ? "text" : "password"}
                value={pass}
                className="px-2.5 py-1.5 outline-none w-full text-black"
                readOnly
                ref={passwordRef}
              />
              <button
                className="bg-blue-800 px-2.5 py-1.5 text-white"
                onClick={() => copytoClipboard(pass)}
              >
                Copy
              </button>
            </div>
          ))}
          <div className="flex text-white gap-3 pt-3">
            {/* Length Slider and Presets */}
            <div className="flex space-x-1">
              <input type="range" min={6} max={50} value={length} onChange={(e) => setLength(e.target.value)} />
              <label htmlFor="">{length}</label>
            </div>
            {/* <div className="flex gap-2">
              {[8, 12, 16, 20].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setLength(preset)}
                  className="bg-blue-500 px-2 py-1"
                >
                  {preset}
                </button>
              ))}
            </div> */}
            {/* Character Options */}
            <div className="flex space-x-1">
              <input type="checkbox" checked={char} onChange={() => setChar(!char)} />
              <label htmlFor="">Character</label>
            </div>
            <div className="space-x-1">
              <input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
              <label htmlFor="">Number</label>
            </div>
            {/* Exclude Similar */}
            <div className="space-x-1">
              <input type="checkbox" checked={excludeSimilar} onChange={() => setExcludeSimilar(!excludeSimilar)} />
              <label htmlFor="">Exclude Similar</label>
            </div>
            {/* Custom Symbols */}
            <div className="space-x-1">
              <input
                type="text"
                value={customSymbols}
                placeholder="Custom Symbols"
                onChange={(e) => setCustomSymbols(e.target.value)}
                className="px-2 py-1"
              />
            </div>
            {/* Multiple Passwords */}
            <div className="space-x-1">
              <input
                type="number"
                value={multiGenerate}
                min={1}
                onChange={(e) => setMultiGenerate(Number(e.target.value))}
                className="px-2 py-1"
              />
              <label htmlFor=""># of Passwords</label>
            </div>
            {/* Toggle Password Visibility */}
            <div className="space-x-1">
              <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor="">Show Password</label>
            </div>
          </div>
          <div className="pt-3">
            <h3>Password Strength: {strength}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
