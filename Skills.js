import React, { Component } from 'react';
import CVdata from './cvdata.json';




class Skills extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div className="container">
        {console.log(postDetail.qualifications.skillName)}
         <p>{postDetail.qualifications.skillName}</p>
         
         {
           postDetail.qualifications.map((qualifications, index) => {
             return <div className="boxPosition">
             {console.log(qualifications.skillCluster)}
             <p>{qualifications.skillCluster}</p>
             {
           qualifications.skills.map((skills, index) => {
             return <div className="boxPosition">
             {console.log(skills.skillName)}
             <p>{skills.skillName}</p>
             <p>{skills.skillLevel}</p>


              
             




             
             
             
             </div>
             })
          }




             
             
             
             </div>
             })
          }
        





       

        
        
      
      
        </div>


      })

      
    }
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js"></script>
        <script src="./AnimeBar.js"></script>
    </div>
    
    )
  }
  

}

export default Skills;