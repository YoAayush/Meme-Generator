import './App.css';

function Image(item){
    console.log(item);

    return(
        <>
            <div className='meme-image'>
                <img src={item.randomImage} alt="" className='fetch-img' onMouseOver={()=>{console.log("Mouse Over")}}/>
                {/* <p>{item}</p> */}
            </div>
        </>
    )
}

export default Image;