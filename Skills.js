import React, { Component } from 'react';
import CVdata from './cvdata.json';




class Skills extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div>
         {
                postDetail.milestones.map((milestonesSubitem, i) => {
                  return (
                    
                     <div className="container">
                     
                     <div className="boxDate">
                     <p>{milestonesSubitem.startDate} - {milestonesSubitem.endDate} </p>
                     </div>

                     <div className="boxPosition">
                     
                     <p><b>{milestonesSubitem.companyName}</b> - {milestonesSubitem.companyCity}, {milestonesSubitem.companyCountry}</p>
                     <p><i>{milestonesSubitem.position}</i></p>
                     <br/>
                     <p>{milestonesSubitem.workExperience.role}</p>
                     
                     
                      </div>
                     




                     
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

export default Skills;