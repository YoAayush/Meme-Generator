import React, { useEffect, useState } from "react";
import './App.css';
// import memesData from './memesData.js';
// import Image from './MemeImage'

function Middleitem(){
    
    const [meme,setMeme] = useState({
        toptext: "",
        bottomtext: "",
        randomImage: "https://i.imgflip.com/1bij.jpg" 
    });

    const [allMemes,setallMemes] = useState([]);
    // console.log(allMemes)
    useEffect( ()=>{
        async function fetching(){
            const fetchedData = await fetch ("https://api.imgflip.com/get_memes");
            const JsonData = await fetchedData.json();
            setallMemes(JsonData);
            // console.log(JsonData);
            }
        fetching();
    },[]);

    let urls;
    
    function getmemeimage(){
        const newMemeArray = allMemes.data.memes;
        // console.log(newMemeArray)
        const indexRandomNumber = Math.floor(Math.random() * newMemeArray.length);
        urls = newMemeArray[indexRandomNumber].url;
        // console.log(urls);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: urls
        }))
        return <p>{JSON.stringify(urls)}</p>
    }

    function handleEvent(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // const thingsArray  = memesData.data.memes.map(thing => {
    //     console.log(thing)
    //     return <p>{JSON.stringify(thing.url)}</p>
    // });
    
    return(
        <>
        {/* <p>{urls}</p>    */}
            <div className="hero">
                <div className="form">
                    <input type="text" placeholder="Top Text" id="top-text" name="toptext" value={meme.toptext} onChange={handleEvent}/>
                    <input type="text" placeholder="Bottom Text" id="bottom-text" name="bottomtext" value={meme.bottomtext} onChange={handleEvent}/>
                    <button className="form-btn" onClick={getmemeimage}>Get a new meme image <img src="/get-image.jpg" alt="" /></button>
                </div>
            </div>
            <div className='meme-image'>
                <img src={meme.randomImage} alt="" className='fetch-img' onMouseOver={()=>{console.log("Mouse Over")}}/>
                <h2 className="meme--text top">{JSON.stringify(meme.toptext)}</h2>
                <h2 className="meme--text bottom">{JSON.stringify(meme.bottomtext)}</h2>
            </div>
            {/* <Image urls = {urls}/> */}
            {/* <Image key = {allMemes.data.memes[indexRandomNumber].id} urls = {meme}/> */}

        {/* {thingsArray} */}
        </>
    )
}

export default Middleitem;

