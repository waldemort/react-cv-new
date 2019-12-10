import React, { Component } from 'react';
import CVdata from './cvdata.json';




class BasicData extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div>
        <h2> {postDetail.personalData.firstName} {postDetail.personalData.familiyName} </h2>
        <p>{postDetail.personalData.street} {postDetail.personalData.houseNumber},       {postDetail.personalData.postalCode} {postDetail.personalData.city}</p>
        <p>{postDetail.personalData.phoneNumber}</p>
        <p>{postDetail.personalData.eMail}</p>
        <p>{postDetail.personalData.birthDate}</p>
        <p>{postDetail.personalData.nationality}</p>

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