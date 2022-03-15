import React, { useState }from "react";
import ReactGoogleLogin from "react-google-login";
export default function GoogleLogin(props) {

  const [img, setImg] = useState();
  const [name, setName] = useState();

  const onResponse = resp => {
    console.log(resp);
    console.log(resp.profileObj.password)
    setImg(resp.profileObj.imageUrl)
    setName(resp.profileObj.name)
  };
  const hendleLogOut = () => { 
    setImg("")
    setName("")
   }
  return (
    <div>
    <ReactGoogleLogin style={{width:'500px'}}
      clientId="833804365260-e28dob0t95hj4gcasffv6aihepoo5tgi.apps.googleusercontent.com" // We created this earlier, remember?
      buttonText="Login with Google"
      onSuccess={onResponse}
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