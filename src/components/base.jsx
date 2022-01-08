import React, { useEffect, useState } from "react";

const Base = () => {
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleInputs = (e) => {
    let temp = result + e.target.name;
    setResult(temp);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleBackspace = () => {
    const temp = result.slice(0, result.length - 1);
    setResult(temp);
  };

  const calculate = () => {
    try {
      const temp = eval(result).toString();
      setResult(temp);
    } catch (err) {
      setResult("Error");
    }
  };

  const handleToggle = () => {
    setTheme(theme === "light-theme"?"dark-theme":"light-theme")
  };
  return (
    <div className="main-page">
      <div className="toggle-main">
        <span style={{ color: theme === "dark-theme" ? "black" : "yellow" }}>
          ☀︎
        </span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={handleToggle} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: theme === "dark-theme" ? "black" : "white" }}>
          ☽
        </span>
      </div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={handleClear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={handleBackspace} id="operations">
            C
          </button>
          <button
            className="highlight"
            name="/"
            onClick={handleInputs}
            id="operations"
          >
            &divide;
          </button>
          <button name="7" onClick={handleInputs}>
            7
          </button>
          <button name="8" onClick={handleInputs}>
            8
          </button>
          <button name="9" onClick={handleInputs}>
            9
          </button>
          <button
            className="highlight"
            name="*"
            onClick={handleInputs}
            id="operations"
          >
            &times;
          </button>
          <button name="4" onClick={handleInputs}>
            4
          </button>
          <button name="5" onClick={handleInputs}>
            5
          </button>
          <button name="6" onClick={handleInputs}>
            6
          </button>
          <button
            className="highlight"
            name="-"
            onClick={handleInputs}
            id="operations"
          >
            &ndash;
          </button>
          <button name="1" onClick={handleInputs}>
            1
          </button>
          <button name="2" onClick={handleInputs}>
            2
          </button>
          <button name="3" onClick={handleInputs}>
            3
          </button>
          <button
            className="highlight"
            name="+"
            onClick={handleInputs}
            id="operations"
          >
            +
          </button>
          <button name="0" onClick={handleInputs}>
            0
          </button>
          <button name="." onClick={handleInputs}>
            .
          </button>
          <button className="highlight" id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Base;
