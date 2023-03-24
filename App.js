

import './App.css';
import React ,{useState}from 'react'



  
function App() {
  
const [data,setData]=useState(null)
const [print,setPrint]=useState(false)
const [inputValue, setInputValue] = useState('');

const [selectedOption, setSelectedOption] = useState('');

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  

 
    


  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    
    
    <div className="App">
     
      
     {
       print?
       
       <h1> {data}</h1>
       :null
     }
     <h1 > ADmyBRAND</h1>
    <input type="text" onChange={getData} />
    
    <div>
      <select value={inputValue} onChange={handleChange}>
        
        <option value="true"> true</option>
        <option value="false">false</option>
        
      </select>
     
    </div>
    <div> <select>
      <option value="+add arg">+add arg </option>
    <option value="constant"> constant</option>
        <option value="false">argument</option>
        <option value="and"> and</option>
        <option value="or">or</option>


        
        
    </select>
    <div> <select>
      <option value="+add arg">+add arg </option>
    <option value="constant"> constant</option>
        <option value="false">argument</option>
        <option value="and"> and</option>
        <option value="or">or</option>


        
        
    </select>
    

    <div className='nav-area'>
     
    </div>
    
    <div>
      <select value={inputValue} onChange={handleChange}>
        
        <option value="true"> true</option>
        <option value="false">false</option>
        
      </select>
      <div>Result: {inputValue}</div>
     
    </div>


    </div>
    </div>
    <div><footer className="footer">
      <p><h3>Submitted by: Priyanka C</h3>
      <h6>Dear ADmyBRAND team,

I am excited to submit my assignment for the job opportunity at your esteemed organization. I appreciate the opportunity to showcase my skills and demonstrate my passion for the field.

I have put in my best effort to complete the assignment to the best of my abilities and I hope that it meets your expectations. I am looking forward to hearing your feedback and further discussing my qualifications for the role.

Thank you for considering my application and for providing me with this opportunity

</h6></p>
    </footer></div>
    </div>
    
  );
}

export default App;