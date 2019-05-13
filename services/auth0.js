import auth0 from 'auth0-js';

class Auth0 {

    constructor() {
  this.auth0 = new auth0.WebAuth({
    domain: 'dev-906wbxlt.auth0.com',
    clientID: 'agMjB6XhqDZNZQK8zPEg0lZVBWtMWnDh',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  //this.login= this.login.bind(this)
    }
    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
          } else if (err) {
            history.replace('/home');
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
          }
        });
      }

  login=()=> {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();

export default auth0Client;