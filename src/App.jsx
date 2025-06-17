import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Homepage from "./pages/Home"
import About from "./pages/About"


function App() {


  return (
    <>

    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
