import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Category from './components/Category';
import Company from './components/Company';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const[search, setSearch] = useState('')
  const setSearchQuery = (find) => {
    setSearch(find)
  }
  

  // const [jobs, setJobs] = useState([])
  // const fetchData = async(field, query) => {
  //   try {
  //     let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?${field}=${query}&limit=40`)
  //     if(response.ok){
  //       let data = await response.json()
  //       console.log(data)
  //       setJobs(data)
  //     }
  //   } catch (error) {
      
  //   }
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setSearchQuery={setSearchQuery} search={search} />} />
        <Route path="/:category" element={<Category/>}/>
        <Route path="/:company" element={<Company/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
