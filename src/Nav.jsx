import './App.css';

function Navbar(){
    return(
        <>
            <nav className="nav-bar">
                <div className="icon">
                    <img src="/icon.png" alt="laughing-image" />
                </div>
                <div className="main-title">
                    <h3>Meme Generator</h3>
                </div>
                <div className="right-title">
                    <h4>React Course ~ Project 3</h4>
                </div>
            </nav>
        </>
    )
}

export default Navbar;