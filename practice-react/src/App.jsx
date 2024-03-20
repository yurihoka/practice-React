import { useState, useRef } from "react";
import "./App.css";
// https://reffect.co.jp/react/react-hook-useref

// login page
function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const handleChangeEmail = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };
  // const handleChangePassword = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `email:${emailRef.current.value}, password:${passwordRef.current.value}`
    );
  };

  return (
    <div className="app">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input id="password" ref={passwordRef} />
        <div>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

// Array
// function App() {
//   const [fruits, setFruits] = useState(["apple", "banana", "grape"]);
// ADD
// const addFruits = () => {
//   setFruits([...fruits, "pear"]);
//   console.log(setFruits);
// };

// DELETE
// const deleteFruits = () => {
//   setFruits(fruits.filter((fruit, index) => fruit !== "banana"));
// };

// CHANGE
//   const changeFruits = () => {
//     setFruits(fruits.map((fruit, index) => (index === 2 ? "pear" : fruit)));
//   };

//   return (
//     <div className="app">
//       <h1>Fruits</h1>
//       <button type="submit" onClick={changeFruits}>
//         Change
//       </button>
//       {/* <input type="text" onChange={handleOnChange} /> */}
//       <p>Fruits: {fruits}</p>
//     </div>
//   );
// }

// String
// function App() {
//   const [name, setName] = useState("");
//   const inputEl = useRef(null);
//   const selectedFile = (e) => {
//     console.log(e.target.files);
//   };
// const handleOnChange = (element) => {
//   console.log(element.target.value);
//   setName(element.target.value);
// };
// const handleOnClick = () => {
// console.log(inputEl.current.getBoundingClientRect());
// inputEl.current.focus();
//   inputEl.current.style.color = "blue";
// };

//   return (
//     <div className="app">
//       <div>
//         <button onClick={() => inputEl.current.click()}>ファイル</button>
//       </div>
//       <input type="file" ref={inputEl} onChange={selectedFile} />
//     </div>
//   );
// }

// Number
// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="app">
//       <h1>Counter</h1>
//       <p>{count}</p>
//       <button type="submit" onClick={handleIncrease}>
//         INCREASE
//       </button>
//     </div>
//   );
// }

export default App;
