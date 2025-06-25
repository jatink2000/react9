import logo from './logo.svg';
import './App.css';
import { Jatin } from './components/Home';
import { About } from './components/About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Propscomponent } from './components/Propscomponent';
import image from "../src/images/image1.jpg"
import { Allstudents } from './components/Allstudents';
import { Usestate } from './components/Usestate';
import { State2 } from './components/State2';
import { Inputstate } from './components/Inputstate';
import Signup from './components/Signup';
import { Usenavigate } from './components/Usenavigate';
import Allproduct from './components/Allproduct';
import Productdetails from './components/Productdetails';
import Useeffect from './components/Useeffect';
import Api from './components/Api';
import Component1 from './components/context/Component1';
import { Useparams } from './components/Useparams';
import { Homeclass } from './components/Homeclass';
import { Aboutclass } from './components/Aboutclass';
import { Mapingclass } from './components/Mapingclass';
import { Stateclass } from './components/Stateclass';
import Propsclass from './components/Propsclass';
import Inputclass from './components/Inputclass';

function App() {

  let details={
    "name":"jatin",
    "city":"jaipur"
  }


  return (
    <>

      <BrowserRouter>
        <Link to={"/"}>home component</Link> &nbsp;&nbsp;&nbsp;
        <Link to={"/about1"}>about component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/contact"}>contact component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Propscomponent"}>Propscomponent component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Allstudents"}>Allstudents component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Usestate"}>Usestate component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/State2"}>State2 component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Inputstate"}>Inputstate component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Signup"}>Signup component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Usenavigate"}>Usenavigate component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Allproduct"}>Allproduct component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Useeffect"}>Useeffect component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Api"}>Api component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Component1"}>Component1 component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Useparams/jatinkumar/jatinkumar@gmail.com"}>Useparams component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Homeclass"}>Homeclass component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Aboutclass"}>Aboutclass component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Mapingclass"}>Mapingclass component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Stateclass"}>Stateclass component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Propsclass"}>Propsclass component</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/Inputclass"}>Inputclass component</Link>&nbsp;&nbsp;&nbsp;

        <Routes>
          <Route path='/' element={<Jatin />} />
          <Route path='/about1' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Propscomponent' element={<Propscomponent mydetails={details}  myimage={image}/>} />
          <Route path='/Allstudents' element={<Allstudents />} />
          <Route path='/Usestate' element={<Usestate />} />
          <Route path='/State2' element={<State2 />} />
          <Route path='/Inputstate' element={<Inputstate />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Usenavigate' element={<Usenavigate />} />
          <Route path='/Allproduct' element={<Allproduct />} />
          <Route path='/Productdetails' element={<Productdetails />} />
          <Route path='/Useeffect' element={<Useeffect />} />
          <Route path='/Api' element={<Api />} />
          <Route path='/Component1' element={<Component1 />} />
          <Route path='/Useparams/:fullname/:email' element={<Useparams />} />
          <Route path='/Homeclass' element={<Homeclass />} />
          <Route path='/Aboutclass' element={<Aboutclass />} />
          <Route path='/Mapingclass' element={<Mapingclass />} />
          <Route path='/Stateclass' element={<Stateclass />} />
          <Route path='/Propsclass' element={<Propsclass name={details}/>} />
          <Route path='/Inputclass' element={<Inputclass/>} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
