import React, { Component } from 'react';
import CVdata from './cvdata.json';
import Anime from 'react-anime';
import VerticalProgress from "./VerticalProgress";




class Skills extends Component{
  render (){

    let animeProps = {
      width: '400px', // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false
      };
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
             return (<div>

             
             <VerticalProgress progress={10} />



            


              
             




             
             
             
             </div>)
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