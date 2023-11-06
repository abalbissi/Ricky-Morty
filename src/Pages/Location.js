import React, { useState, useEffect }  from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup2 from '../components/Filters/Category/InputGroup2'


const Location = () => {
  const [id, setID] = useState(1)
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  const{name ,dimension,type} = info
  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map((x)=>{
          return fetch(x).then((res)=>res.json());
        })
      );
      setResults(a)
    })();
  }, [api]);
  return (
    <div className='container'>
      <div className='row'>
      <h1 className='text-center'>Location :  <span className="text-primary">
        {name === ""? "unknown" : name}
        </span></h1>
      <h5 className='text-center'>Dimension : {dimension  === ""? "unknown" : dimension}</h5>
      <h6 className='text-center'>Type : {type === ""? "unknown" : type}</h6>
      
      </div>
      <div className='row'>
      <div className='col-3'>
       <h4 className="text-center mb-4">
         Pick Episodes
       </h4>
       <InputGroup2 total={126} setID={setID}/>
      </div>
        <div className='col-8'>
          <div className='row'>
            <Cards page="/location/" results={results} />
          </div>
         </div>
      </div>
    </div>
  )
}

export default Location