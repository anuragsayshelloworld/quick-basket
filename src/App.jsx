import Layout  from "./Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return <BrowserRouter>
           <Layout>
              <Routes>
                <Route path="/" element={<Home/>}/>
              </Routes>
           </Layout>
         </BrowserRouter>
}