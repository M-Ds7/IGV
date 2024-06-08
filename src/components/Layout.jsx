import Navbar from "./Navbar"; 

const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> 
      <div className="container mt-5"> 
        <div className="row text-center"> 
          {children} 
        </div>
      </div>
    </>
  );
};

export default Layout;
