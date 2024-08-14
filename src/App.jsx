import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Technologies from "./components/Technologies"
import Project from "./components/Project"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SocialL from "./components/SocialL"


function App() {
  return (
    <>
      {/* <div className="bg-black min-h-screen px-1 py-3 flex flex-col gap-16 "> */}
      <div className="">
      <div>
      </div>



        <Nav/>
        <Home/>
        <About/>
        <Experience/>
        <Technologies/>
        <Project/>
        <Services/>
        <Contact/>
        <Footer/>
        <SocialL/> 
      </div>
    </>
  )
}

export default App
