import {BrowserRouter,Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList.jsx"
import {useState,useEffect} from "react";
import CountriesList from "./components/CountriesList.jsx"


export default function App() {


 const BASE_URL = "http://localhost:9000";
const [cities,setCities] = useState([])
const [isLoading,setIsLoading] = useState (false)


useEffect(function(){
async function fetchCitites (){
try { 
  setIsLoading(true);
const request = await fetch('${BASE_URL}');
const data = await request.json();
}
catch {
  alert('There was an error loading data...')
} finally {
  setIsLoading(false);
}
}
},[]);


  return <div>
  <BrowserRouter>
  <Routes>

<Route index element ={<Homepage/>}/>
<Route path="product" element={<Product/>} />
<Route path="pricing" element = {<Pricing/>}/>
<Route path ="/login" element = {<Login/>}/>

<Route path="app" element = {<AppLayout/>}>
  <Route index element= {<CityList cities={cities} isLoading ={isLoading}/>}/>
<Route path='cities' element = {<CityList cities={cities} isLoading={isLoading}/>}/>
<Route path = 'countries' element = {<CountriesList
cities={cities} isLoading = {isLoading}
/>}/>
<Route path = 'form' element ={<p></p>}/>
</Route>
<Route path ="*" element = {<PageNotFound/>}/>
  </Routes>

  </BrowserRouter>

  </div>
}
