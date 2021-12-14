import './App.css';
import  Profilephoto from './component/folder/profilephoto';
import  Fullname from './component/folder/fullname';
import  Adresse from './component/folder/adresse';
import  Introduction from './component/folder/introduction';
function App() {
  return (
    <div className="App"> 
         
        <img className='forest' src='forest.png' alt='forest'/>

         <div className="containers">
          <Profilephoto/>
          <Fullname/>
          <Adresse/>
          <Introduction/>
          </div> 
          
        <div className="gitelegram">
           <a href='https://telegram.org/'>  <img className='telegram' src='./telegram.png' alt='telegram'/></a>
           <a href="https://github.com/nourhenechaos"> <img className='github'src='./Github.png' alt='github'/></a>
        </div>

    </div>
  );
}

export default App;
