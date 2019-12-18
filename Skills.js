import React, { Component } from 'react';
import CVdata from './cvdata.json';




class Skills extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div>
        {console.log(postDetail.qualifications.skillName)}
         <p>{postDetail.qualifications.skillName}</p>
         
         {
           postDetail.qualifications.map((qualifications, index) => {
             return <div>
             {console.log(qualifications.skillCluster)}
             <p>{qualifications.skillCluster}</p>
             
             
             
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