import React, { Component } from 'react';
import CVdata from './cvdata.json';
import Anime from 'react-anime';




class Skills extends Component{
  render (){


   
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div className="container">
       
         <p>{postDetail.qualifications.skillName}</p>
         
         {
           postDetail.qualifications.map((qualifications, index) => {
             return <div className="boxPosition">
           
             <p>{qualifications.skillCluster}</p>
             {
           qualifications.skills.map((skills, index) => {
             return (
               <div>
               
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