import './Navbar.css';
const Navbar = () => {

    // const ulDesign = {
    //     display: 'flex',
    //     gap:'20px', 
    //     liststyle:'none',
    //     fontWeight:'bold',
    // }

return (
        <>
            <header className="header">
                <nav>
                    <a style={{color:'red',textDecoration:'none'}} href="index.html" id="logo">To Do App</a>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                    </ul>
                </nav>
            </header>
        </>
    )
    }
    export default Navbar