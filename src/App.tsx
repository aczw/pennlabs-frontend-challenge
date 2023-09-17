import { useState } from "react";
import CoursesView from "./components/Courses";
import Header from "./components/Header";
import type { Course } from "./utils/types";

const App = () => {
  const [cart, setCart] = useState<Course[]>([]);

  return (
    <>
      <Header cart={cart} />
      <CoursesView setCart={setCart} />
    </>
  );
};

export default App;
