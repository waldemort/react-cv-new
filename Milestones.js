import React, { Component } from 'react';
import CVdata from './cvdata.json';




class BasicData extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div>
         {
                postDetail.milestones.map((milestonesSubitem, i) => {
                  return (
                     <div>
                     <p>{milestonesSubitem.startDate} - {milestonesSubitem.endDate}</p>
                     <p>{milestonesSubitem.position}</p>
                     
                     
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

export default BasicData;