import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dgoa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  accessToken = "";
  idToken = "";

  ngOnInit(): void {
    const hashParams = location.hash.replace("#","").split("&");
    hashParams.forEach((param) => {
      const p = param.split("=");
      if (p[0] == "access_token") this.accessToken = p[1];
      if (p[0] == "id_token") this.idToken = p[1];
    });
    console.log("access_token: ", this.accessToken);
    console.log("id_token: ", this.idToken);
  }

  signInWithGoogle(): void {
    location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=733460469950-9bsam7nba7ljgj7nmhu3td2mrlctvhet.apps.googleusercontent.com&redirect_uri=http%3A//localhost:4200&response_type=id_token%20token&scope=profile&nonce=abcdef"
  }

}
