import Cart from "./components/Cart";
import Courses from "./components/Courses";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Courses />
        <Cart />
      </div>
    </>
  );
}

export default App;
