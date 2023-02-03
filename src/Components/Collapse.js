import React, { useState } from 'react'
function Collapse() {
    let [flag,setFlag]=useState(false);
    function showDetails(){
        if(!flag){
            setFlag(true);
        }
        else
        {
            setFlag(false);
        }
    }
  return (
    <div className='d-flex flex-column align-items-center'>  
        <button className='btn btn-warning w-50 d-flex justify-content-between align-items-center' onClick={showDetails}>
            <span>  
                See Details
            </span>
            {
                flag?<i className='fas fa-minus'></i>:<i className='fab fa-plus'></i>
            }
            
            </button>
        {flag&& <div className='content bg-warning w-50 rounded-2 mx-auto' style={{textAlign:'center'}}>
            <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum suscipit vel recusandae in vitae nostrum, esse quisquam libero aspernatur earum beatae perferendis deleniti fugiat dolores blanditiis cupiditate, quibusdam facilis!

            </p>

        </div>}
    </div>
  )
}

export default Collapse