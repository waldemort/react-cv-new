import React, { Component } from 'react';
import CVdata from './cvdata.json';
import './style.css';
import Icon from './locationIcon.png';



class BasicData extends Component{
  render (){
    return(
    <div> 
    {
      CVdata.map((postDetail, index) => {
        return <div class="container">
        <div class="boxData">        
        <h1 >Curriculum Vitae</h1>
        <h2> {postDetail.personalData.firstName} {postDetail.personalData.familiyName} </h2>
        </div>
        
        <div class="boxPic">
        <img class="profile" src="https://media.licdn.com/dms/image/C4D03AQHeIK5OJJUI7w/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=PhpzfEZTsEC9de0aSQSIY9-WrPYaYbab3J2mxuSmb2k" alt="MDN"/>
        </div>
        <div class="boxData2">
        <p> <img class="icon" src="https://github.com/waldemort/react-cv-new/blob/master/pic/icon_location.png?raw=true" alt="MDN"/>{postDetail.personalData.street} {postDetail.personalData.houseNumber},       {postDetail.personalData.postalCode} {postDetail.personalData.city}</p>
        <p> <img class="icon" src="https://github.com/waldemort/react-cv-new/blob/master/pic/icon_phone.png?raw=true" alt="MDN"/>{postDetail.personalData.phoneNumber}</p>
        <p> <img class="icon" src="https://github.com/waldemort/react-cv-new/blob/master/pic/icon_address.png?raw=true" alt="MDN"/> {postDetail.personalData.eMail}</p>
        <p> <img class="icon" src="https://github.com/waldemort/react-cv-new/blob/master/pic/icon_birth.png?raw=true" alt="MDN"/> {postDetail.personalData.birthDate}</p>
        <p> <img class="icon" src="https://github.com/waldemort/react-cv-new/blob/master/pic/icon_nationality.png?raw=true" alt="MDN"/> {postDetail.personalData.nationality}</p>
        </div>

         
         </div>


      })

      
    }
    </div>
    )
  }
  

}

export default BasicData;