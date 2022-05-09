import './App.css';
import Portal from './component/Portal';
import stylemodl from './style/ErrorModal.module.css';

function App() {

  

  return (
    <div className="App">

      <div className={`${stylemodl.wholewrap} ${stylemodl.overlaymodl}`}>
         
          <div className='tesxt1boxed'>
              loream lipsm testing jobs work
              <br/>
              loream lipsm testing jobs work
              <br/>
              loream lipsm testing jobs work
              <br/>
              loream lipsm testing jobs work
              
          </div>

          
            <Portal />      
         

          <div className='tesxt1boxed'>
              loream lipsm testing jobs work 2
              <br/>
              loream lipsm testing jobs work 2
              <br/>
              loream lipsm testing jobs work 2
              <br/>
              loream lipsm testing jobs work 2
              
          </div>

          

      </div>
      
        
    </div>
  );
}

export default App;
