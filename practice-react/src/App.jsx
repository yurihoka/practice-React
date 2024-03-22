import { createBrowserRouter } from "react-router-dom";
import Top from "./components/Top";
import TodoList from "./components/TodoList";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Top />
      <TodoList />
      <Login />
      {/* //{" "} */}
      {/* <BrowserRouter>
        // <Route path="/" component={Top} />
        // <link to="/">Back</link> */}
      {/* <button>button</button> */}
      {/* //{" "}
      </BrowserRouter> */}
    </div>
  );
}

export default App;
