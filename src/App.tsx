import Cart from "./components/Cart";
import Courses from "./components/Courses";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 calc(1rem + 10%)",
        }}
      >
        <Courses />
        <Cart />
      </div>
      <div></div>
    </>
  );
}

export default App;
