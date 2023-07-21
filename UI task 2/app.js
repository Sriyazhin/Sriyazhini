import main from './assets/images/mainimage.png';
import analysis from './assets/images/analysis.webp';
import planning from './assets/images/planning.jpg' ;
import design from './assets/images/design.avif';
import building from './assets/images/building.webp';
import './App.css';

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
        
        <div className='analysis'> 
        <div className='foricon'><img src={analysis} className='cardicon' height='100px'></img></div>
        <div className='headingone'>ANALYSIS</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
        <div className='planning'> 
        <div className='foricon'><img src={planning} className='cardicon' height='100px'></img></div>
        <div className='headingone'>PLANNING</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
        <div className='design'>
        <div className='foricon'><img src={design} className='cardicon' height='100px'></img></div>
        <div className='headingone'>DESIGN</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
        <div className='building'>
        <div className='foricon'><img src={building} className='cardicon' height='100px'></img></div>
        <div className='headingone'>BUILDING</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
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
