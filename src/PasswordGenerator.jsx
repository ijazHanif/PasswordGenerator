import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [settings, setSettings] = useState({
    length: 8,
    number: false,
    char: false,
    excludeSimilar: false,
    customSymbols: "",
    multiGenerate: 1,
    darkMode: true,
    showPassword: false,
  });
  const [passwords, setPasswords] = useState([]);
  const [strength, setStrength] = useState("");
  const passwordRef = useRef(null);

  const evaluateStrength = (password) => {
    // Implement a function to evaluate password strength
  };

  const passwordGen = useCallback(() => {
    const chars = {
      base: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: settings.customSymbols || '`!@#$%^&*()_{}[]";:?/><,~',
      similar: /[O0Il1]/g,
    };
    let str = chars.base + (settings.number ? chars.numbers : "") + (settings.char ? chars.symbols : "");
    if (settings.excludeSimilar) str = str.replace(chars.similar, "");

    const generatePassword = () =>
      Array.from({ length: settings.length }, () => str[Math.floor(Math.random() * str.length)]).join("");

    const passList = Array.from({ length: settings.multiGenerate }, () => {
      const pass = generatePassword();
      evaluateStrength(pass);
      return pass;
    });

    setPasswords(passList);
  }, [settings]);

  useEffect(() => {
    passwordGen();
  }, [settings, passwordGen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const copyToClipboard = (password) => {
    passwordRef.current.value = password;
    passwordRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div className={`w-full h-screen ${settings.darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex justify-center items-center h-screen">
        <div className={`${settings.darkMode ? "bg-gray-800" : "bg-gray-300"} py-6 px-6 rounded-lg`}>
          <div className="flex justify-between">
            <label>Dark Mode</label>
            <input type="checkbox" name="darkMode" onChange={handleChange} checked={settings.darkMode} />
          </div>
          {passwords.map((pass, index) => (
            <div key={index} className="flex rounded-lg overflow-hidden mb-2">
              <input
                type={settings.showPassword ? "text" : "password"}
                value={pass}
                className="px-2.5 py-1.5 outline-none w-full text-black"
                readOnly
                ref={passwordRef}
              />
              <button className="bg-blue-800 px-2.5 py-1.5 text-white" onClick={() => copyToClipboard(pass)}>
                Copy
              </button>
            </div>
          ))}
          <div className="flex text-white gap-3 pt-3">
            <input type="range" name="length" min={6} max={50} value={settings.length} onChange={handleChange} />
            <label>{settings.length}</label>
            <input type="checkbox" name="char" checked={settings.char} onChange={handleChange} />
            <label>Character</label>
            <input type="checkbox" name="number" checked={settings.number} onChange={handleChange} />
            <label>Number</label>
            <input type="checkbox" name="excludeSimilar" checked={settings.excludeSimilar} onChange={handleChange} />
            <label>Exclude Similar</label>
            <input
              type="text"
              name="customSymbols"
              value={settings.customSymbols}
              placeholder="Custom Symbols"
              onChange={handleChange}
              className="px-2 py-1"
            />
            <input
              type="number"
              name="multiGenerate"
              value={settings.multiGenerate}
              min={1}
              onChange={handleChange}
              className="px-2 py-1"
            />
            <label># of Passwords</label>
            <input type="checkbox" name="showPassword" checked={settings.showPassword} onChange={handleChange} />
            <label>Show Password</label>
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
