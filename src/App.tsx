import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";


const technologiesDataPromise = async() => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}


function App() {

  return (
    <>
      
      <Nav></Nav>

      <Hero></Hero>

      <Suspense fallback={<h3 className="container mx-auto text-2xl font-bold">Loading....</h3>}>
        <Technologies technologiesDataPromise={technologiesDataPromise()}></Technologies>
      </Suspense>

      <Footer></Footer>

    </>
  )
}

export default App
