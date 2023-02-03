import React, { useState } from 'react';
// import headCoin from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMn0swmUXZAmAhMFF9iCCADQhmVvu0WUxk41jLG4mnxg&s';
// import tailCoin from '../coin tail.jpeg';
function FlipCoins() {
    let arr=[
        {
            side:'head',
            imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMn0swmUXZAmAhMFF9iCCADQhmVvu0WUxk41jLG4mnxg&s"
        },
        {
            side:'tail',
            imgSrc:"https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_SY580_.jpg"
        }
    ];
    let[coin,setCoin]=useState({
        side:'head',
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMn0swmUXZAmAhMFF9iCCADQhmVvu0WUxk41jLG4mnxg&s"
    });
    let[totalFlips,setTotalFlips]=useState(0);
    let[heads,setHeads]=useState(0);
    let[flag,setFlag]=useState(false);
    function flipMe(){
        setFlag(true)
        if(flag){
            setTotalFlips((totalFlips+=1));
            let index=Math.floor(Math.random()*arr.length);
            setCoin(arr[index]);
            if(arr[index].side==="head"){
                setHeads((heads+=1));
            }
        }
       
    }
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1>Flip Coin</h1>
        {flag&&<img src={coin.imgSrc} alt="coin image" width={'150px'}/>}
        <button className='btn btn-warning m-2 px-4' onClick={flipMe}>Flip Me!</button>
        <h5>
            Out of {totalFlips} flips, there have been {heads} heads and {totalFlips-heads} tails
        </h5>
    </div>
  )
}

export default FlipCoins