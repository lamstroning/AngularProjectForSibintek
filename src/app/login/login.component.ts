import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('submitBtn', {static: false})
  btn: ElementRef;
  phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  disable = false;
  getErrorMessagePhone() {
    if (this.phone.hasError('required')) {
      return 'Заполните это поле';
    } else if (this.phone.hasError('minlength')) {
      return 'Слишком короткий номер';
    }
    return false;
  }
  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'Заполните это поле';
    } else if (this.password.hasError('minlength')) {
      return 'длина пароля не менее 6 символов';
    }
    return false;
  }
  checkDisable() {
    this.disable = !this.getErrorMessagePhone() && !this.getErrorMessagePass();
  }
  submit() {
    if (!this.getErrorMessagePass() && !this.getErrorMessagePhone()) {
      this.router.navigateByUrl('/payment',  { skipLocationChange: true});
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {

  }

}
