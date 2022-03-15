import React, { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";
export default function FacebookLogin(props) {

  const [img, setImg] = useState();
  const [name, setName] = useState();

  const onResponse = resp => {
    console.log(resp);
    console.log(resp.email)
    setImg(resp.picture.data.url)
    setName(resp.name)
  };
  const hendleLogOut = () => { 
    setImg("")
    setName("")
   }
  return (
    <div>
    <ReactFacebookLogin style={{width:'500px'}}
      appId="1184579925701577" // we created this, remember?
      autoLoad={true}
      fields="name,email,picture"
      callback={onResponse}
      onFailure={onResponse}
      redirectUri="http://localhost:3000"
    />
    {name &&
    <div>
    <h1>
    {name}
    </h1>
    <img src={img} style={{width: '100px', height: '100px', borderRadius: '50%', border:'none'}}/>
    <button style={{padding: '15px', border:'none', fontSize: '15px', color:'gray', marginTop:"5%", backgroundColor:"white"}} onClick={hendleLogOut}>Log out</button>
    </div>
    }    
    </div>
  );
}


