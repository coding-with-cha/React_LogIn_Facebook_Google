import React from "react";
import GitHubLogin from 'react-github-login';

export default function GithubLogin(props) {
    const onSuccessGithub = (response) => {
        console.log(response);
      }
  return (
    <GitHubLogin 
    clientId="15a42204f179504776a8"
    onSuccess={onSuccessGithub}
    buttonText="LOGIN WITH GITHUB"
    className="git-login"
    valid={true}
    redirectUri="http://localhost:3000"
    />
  );
}

// return code 
