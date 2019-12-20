import React, { Component } from 'react';
import CVdata from './cvdata.json';



const ProgressBar = (props) =>{

  return(
    <div className="progress-bar">
    <Filler percentage={props.percentage}/>
    </div>
  )
}

const Filler = (props) => {
  return(
    <div className="filler" style={{width: `${props.percentage}%`}}/>

    
  )
}

class Skills extends Component{
  render (){


   
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div className="container">
       
         <p>{postDetail.qualifications.skillName}</p>
         <div className="boxDate">
                     <p className="date"> </p>
                     </div>
         {
           postDetail.qualifications.map((qualifications, index) => {
             return <div className="boxPosition">
           
             <h3>{qualifications.skillCluster}</h3>
             {
           qualifications.skills.map((skills, index) => {
             return (
               <div>
               <p>{skills.skillName}</p>
               <ProgressBar percentage={skills.skillLevel}/>
               </div>
             );
             })
          }




             
             
             
             </div>
             })
          }
        





       

        
        
      
      
        </div>


      })

      
    }

    </div>
    
    )
  }
  

}

export default Skills;