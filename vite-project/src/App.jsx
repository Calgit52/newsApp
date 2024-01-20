import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

/* eslint-disable react/no-unknown-property */
const App = () => {
  const [category, setCategory] = useState("general")

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}
export default App;