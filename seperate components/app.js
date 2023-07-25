import main from './assets/images/mainimage.png';
import './App.css';
import Analysis from './analysis';
import Planning from './planning';
import Design from './design';
import Building from './building';
import Commoncard from './commonCard';

function App() {
  return (
    <div className='full'>
      
      <div className='firstdivision'>
           
        <div className='forimage'>
        <img src={main} alt='person' className='alterimage' width='550px' height='520px'></img>
        </div>
        <div className='forcontent'>
          <div className='contentone'>ABOUT US</div>
          <div className='contenttwo'>Plan. Perform. Inspire.</div>
          <div className='contentthree'>Our Company is a relationship-based company, meaning that we focus on developing and maintaining long-term relationships with all of our business partners.</div>
          <div className='contentfour'><button className='btnone'><a href='##' className='linkone'>READ MORE</a></button></div>
        </div>
      </div>
      <div className='forcards'>
        <Analysis />
        <Planning />
        <Design /> 
        <Building />
        
      </div>
      <div className="lastdivision">
        <div className="lastone">
        Sample text. Click to select the text box. Click again or double<br/> click to start editing the text.
        </div>
        <div className="lasttwo">
            <a href="https://nicepage.com/website-templates" id="web">Template</a> created with <a href="https://nicepage.com/https://nicepage.com" id="web">Nicepage</a>.
        </div>
        </div>
    
    </div>
   
  );
}

export default App;
