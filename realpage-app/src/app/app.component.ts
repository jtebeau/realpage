import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  developer = 'Johnathan M. Tebeau';
  profile = 'https://media.licdn.com/dms/image/C5603AQHV94BM9VmKgw/profile-displayphoto-shrink_100_100/0?e=1545264000&v=beta&t=39aEWbAZ9VXtDeSnVeusru4aIOb5hL2KEoScYAPK6cs';
  $scope.dateVariable = new Date();
}
