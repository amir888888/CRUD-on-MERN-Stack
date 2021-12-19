import { forwardRef, useEffect, useState } from 'react';
import FlipMove from 'react-flip-move'
import Lists from './Components/Lists';
import './Styles/app.css'
const App =forwardRef(({ref}) => {
  const URL = 'http://localhost:4000/';
  // console.log('app rendered');
  const [name, setname] = useState('');
  const [isEditing, setisEditing] = useState(false);
  const [editId, seteditId] = useState()
  const [items, setitems] = useState()
 
  // const getNames = async() => {
  //   const data = await (await fetch(URL)).json();
  //   setitems(data.list)
  //   // console.log(data);
  // }

 
  const submitForm = async(e) => {
    e.preventDefault();
    if(!name){
      alert('plz enter name')
    }else if(name && isEditing){
     
      items.map((item)=>{
        if(item._id === editId){
          try {
            const putMethod = {
              method: 'PUT', // Method itself
              headers: {
               'Content-type': 'application/json'
              },
              body: JSON.stringify({user:name}) // We send data in JSON format
             };
              fetch(`${URL}${editId}`, putMethod)
          } catch (error) {
            console.log(error);
          }
        }
        return name
      })
      setname('');
      seteditId(null);
      setisEditing(false)
    }else{
      try {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user:name})
        };
        
        await fetch(URL, options)
          .then(response => response.json())
          .then(data =>console.log(data));
        }catch (error) {
        // console.log(error);
      }
    }
   
    setname('')
  };

  
  useEffect(() => {
    async function fetchData() {
      const data = await (await fetch(URL)).json();
      setitems(data.list)
    }
    fetchData()
  }, [items]);
 
  const remove = async(id)=>{
    const response = await fetch(`${URL}${id}`, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json',
          
      },
     
  });
  console.log(await response.json());
}
const edit = (id)=>{
  const editItem = items.find((item) => item._id === id);
  seteditId(id);
  setisEditing(true)
  setname(editItem.user)
}
  // console.log(items);
  return (
    <>
      <div ref={ref} className="app">
        <form onSubmit={submitForm}>
        <div className="input-group mb-3">
          <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" placeholder="Recipient's username"
          aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">{isEditing ? 'Submit' : 'Enter'}</button>
        </div>
        </form>
       
      </div >
      <div ref={ref} className="lists">
         <Lists items={items} remove={remove} edit={edit}/>
      </div>
    </>
  );
}
)
export default App;
