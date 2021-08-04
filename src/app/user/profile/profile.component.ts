import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import { Toastr, TOASTR_TOKEN } from 'src/app/common/toastr.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  private firstName!: FormControl
  private lastName!: FormControl
  constructor(private authService: AuthService,
              private router: Router,
              // @Inject(TOASTR_TOKEN) private toastr: Toastr,
              private toastr: ToastrService
              ) { }

  ngOnInit(): void {
     this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required, Validators.pattern('[a-zA-Z].*')])
     this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['events'])
  }

  saveProfile(formValues: any){
    if (this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Saved')
        })

    }

  }
  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login'])
    })
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched

  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched

  }

}
