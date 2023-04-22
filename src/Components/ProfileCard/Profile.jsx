import React from 'react'
import "./profile.css"
import {AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"

export default function Profile(props) {
  return (
    <>
    
    <div className="profile-card">
      <div className="image">
        <img src={`https://avatars.dicebear.com/v2/avataaars/{${props.username}}.svg?options[mood][]=happy`} alt="" className="profile-img" />
      </div>




      <div className="text-data">
        <span className="name_u">{props.username}</span>
        <span className="name">{props.name}</span>
        <span className="name">{props.email}</span>
      </div>


      <div className="buttons">
        <button  className="button">{props.website}</button>
        <span>Company : <b>{props.company}</b></span>
        <h5 style={{fontStyle:"italic"}}>{props.catchPhrase}</h5>
        <span>Phone : <b>{props.phone}</b></span>
      </div>


                    <div className="media-buttons">
                      <a href="hildegard.org" style={{background: "#4267b2"}} className="link">
                      <FaFacebookF/>
                      </a>
                      <a href="#" style={{background: "#1da1f2"}} className="link">
                        <AiOutlineTwitter/>
                      </a>
                      <a href="#" style={{background: "#e1306c"}} className="link">
                        <AiOutlineInstagram/>
                      </a>
                      <a href="#" style={{background: "#ff0000 "}}className="link">
                        <AiFillYoutube/>
                      </a>
                    </div>

      {/* <Profile username="Bret" name="Leanne Graham" email = "Sincere@april.biz" website="hildegard.org" company="Romaguera-Crona" catchPhrase="Multi-layered client-server neural-net" phone="1-770-736-8031 x56442" street="kulas Light" suite= "apte" city="ghaziabad" zipcode="7676798"/> */}
            
      <div className="address">
        <div className="data">
          <span className="number">{props.street}, {props.suite}</span>
        </div>
        <div className="data">
          <span className="number">{props.city}</span>
        </div>
        <div className="data">
          <span className="number">{props.zipcode}</span>
        </div>
      </div>
    </div>
    </>
  )
}


