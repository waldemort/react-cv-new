import React, { Component } from 'react';
import CVdata from './cvdata.json';




class Milestones extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div>
         {
                postDetail.milestones.map((milestonesSubitem, i) => {
                  return (
                    
                     <div class="container">
                     
                     <div class="boxDate">
                     <p>{milestonesSubitem.startDate} - {milestonesSubitem.endDate} </p>
                     </div>

                     <div class="boxPosition">
                     
                     <p><b>{milestonesSubitem.companyName}</b> - {milestonesSubitem.companyCity}, {milestonesSubitem.companyCountry}</p>
                     <p><i>{milestonesSubitem.position}</i></p>
                     <p>{milestonesSubitem.aspiredPosition}</p>
                     <p>{milestonesSubitem.workExperience.role}</p>
                     </div>
                     {
                       milestonesSubitem.workExperience.map((workExperience, k) => {
                         return (
                           <div class="container">
                           <p>{workExperience.activities}</p>
                           </div>
                           )
                        })
                      }
                     




                     
                     </div>
                     
                  )
                })
               }
        

       

        
        
      
      
        </div>


      })

      
    }
    </div>
    )
  }
  

}

export default Milestones;