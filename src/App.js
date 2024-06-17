import Navbar from "./components/Navbar";
import Search from "./components/Search";
import mySvg from "./media/mySvg.svg"



function App() {
  return (<>
    <div style={{
      margin:'0px',
      backgroundColor: "#121212",
      padding: '5px',
      height: '100vh',
      backgroundImage: `url(${mySvg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // backgroundPosition:"fixed"
      
    }}>
      <Navbar></Navbar>
      <Search/>
    </div>
  </>
    
  );
}

export default App;
