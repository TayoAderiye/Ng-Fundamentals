import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any
  password: any
  mouseoverLogin: any
  loginInvalid = false
  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  login(formValues: any){
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        if(!resp){
          // this.loginInvalid = true
          this.toastr.error('Invalid Login Info')
        }else {
          this.toastr.success(`Welcome ${formValues.userName}`)
          this.router.navigate(['events'])
        }
      })

  }
  cancel(){
    this.router.navigate(['events'])
  }

}
