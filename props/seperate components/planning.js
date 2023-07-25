import React from 'react';
import planning from './assets/images/planning.jpg' ;

const Planning = ()=>{
    return(
        <div className='planning'> 
        <div className='foricon'><img src={planning} className='cardicon' height='100px'></img></div>
        <div className='headingone'>PLANNING</div>
        <div className='contentfive'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
        <div className='forbutton'><button className='btntwo'><a href='##' className='linktwo'>MORE</a></button></div>
        </div>
    );
};
export default Planning;
