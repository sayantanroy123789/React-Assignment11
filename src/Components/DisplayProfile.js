import React from "react";
import "./comp.css";
function DisplayProfile({ data }) {
  return (
    <div >
      <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}} >
        <div style={{width:"60%", backgroundColor:"white", }}>
          <div style={{ display: "flex", marginLeft:"50px", marginTop:"50px" }}>
            <img src={data.avatar_url}   />
            <h4 >{data.login}</h4>
            <h4 >{data.email}</h4>
          </div>
          <div style={{display:"flex", justifyContent:"space-around", marginTop:"30px"}} >
          
          <div style={{display:"flex", flexDirection:"column"}}>
                {" "}
                <h2 >Followers</h2>{" "}
                <h3 >{data.followers}</h3>{" "}
              </div>
              <div style={{display:"flex", flexDirection:"column"}}>
                {" "}
                <h2 >Repo</h2>{" "}
                <h3 >{data.public_repos}</h3>{" "}
              </div>
              
              <div style={{display:"flex", flexDirection:"column"}}>
                {" "}
                <h2 >following</h2>{" "}
                <h3 >{data.following}</h3>{" "}
              </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DisplayProfile;
