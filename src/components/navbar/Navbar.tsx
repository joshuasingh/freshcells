import './Navbar.css';

const Navbar = ({ children }: any) => {
  return (
    <div className='navbar-container'>
       <div className='navbar-row'> 
         <h1>Welcome to Freshcells</h1>  
       </div>
       {children}
    </div>    
  )    
}

export default Navbar;