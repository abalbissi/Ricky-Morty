import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Paginations from "./components/Paginations/Paginations";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CardDetails />}/>

        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/episodes/:id" element={<CardDetails />}/>

        <Route path="/location" element={<Location />}/>
        <Route path="/location/:id" element={<CardDetails />}/>

      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchingData, setFetchingData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("")
  const { info, results } = fetchingData;

  console.log(pageNumber);

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchingData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Paginations
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
