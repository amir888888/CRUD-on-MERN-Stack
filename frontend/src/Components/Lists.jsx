import React from 'react';
import FlipMove from 'react-flip-move';
import '../Styles/lists.css'
const Lists = ({ items, remove ,edit}) => {
    // console.log('rendered list');
    // console.log(items);
    return (
        <div >
            <FlipMove>
            {items && items.map((item) => {
              
               
              return <ul key={item._id} className="list-group">
                  <li className="list-group-item">
                      <div className="text text-brea">{item.user}</div>
                      <div className="btns">
                      <button type="button" onClick={()=>edit(item._id)} className="btn btn-outline-success">Edit</button>
                      <button type="button" onClick={()=>remove(item._id)} className="btn btn-outline-danger">Delete</button>
                      </div>
                  </li>


              </ul>
          })}
            </FlipMove>
           
        </div>
    )
}

export default Lists
