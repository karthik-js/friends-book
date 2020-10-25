import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.isAdmin = this.tokenStorage.getUser().isAdmin;
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(): void {
    const email = this.form.email;
    const firstname = this.form.email.split('@')[0];
    const user = {
      email,
      firstname,
      lastname: '',
      gender: 'Male',
      number: '9922992299',
      country: 'India',
      state: 'Unknown',
      isAdmin: false,
    };
    this.tokenStorage.saveToken('hi');
    this.tokenStorage.saveUser(user);
    this.router.navigateByUrl('/home');

    // this.authService.login(this.form).subscribe(
    //   (data) => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.isAdmin = this.tokenStorage.getUser().isAdmin;
    //     this.reloadPage();
    //     this.router.navigateByUrl('/home');
    //   },
    //   (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
