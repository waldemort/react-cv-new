import React, { Component } from 'react';
import CVdata from './cvdata.json';
import Anime from 'react-anime';




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

             
             <Anime {...animeProps}>
             {qualifications.skills.map((v,i) => 
             <div class="demo-content">
             <div class="square shadow"></div>
                  
             <div classname="square el" key={i}>a</div>
             </div>
             )}
             </Anime>



            


              
             




             
             
             
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