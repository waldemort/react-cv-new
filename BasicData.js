import React, { Component } from 'react';
import CVdata from './cvdata.json';
import './style.css';




class BasicData extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div>
        
        
<table class="tableHead">
  <tr>
    <th>
    <h1 >Curriculum Vitae</h1>
    <h2> {postDetail.personalData.firstName} {postDetail.personalData.familiyName} </h2>
    </th>
    <th>pic</th>
    
  </tr>
  <tr><p>{postDetail.personalData.street} {postDetail.personalData.houseNumber},       {postDetail.personalData.postalCode} {postDetail.personalData.city}</p>
        <p>{postDetail.personalData.phoneNumber}</p>
        <p>{postDetail.personalData.eMail}</p>
        <p>{postDetail.personalData.birthDate}</p>
        <p>{postDetail.personalData.nationality}</p></tr>
  
</table>
      
      
        </div>


      })

      
    }
    </div>
    )
  }
  

}

export default BasicData;