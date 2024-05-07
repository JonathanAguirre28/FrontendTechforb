import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading = false;
  constructor(private _snackBar: MatSnackBar, private router: Router){}

  showPassword = false;

  myForm = new FormGroup({
    email: new FormControl ('Luciano@email.com', [Validators.required, Validators.email]),
    password: new FormControl ('123456', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ])    
  })
  ngOnInit(): void { }

  ingresar() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;

    if(email == 'Luciano@email.com' && password == '123456'){
      this.fakeLoading();
    }else {
      this.error();
      this.myForm.reset();
    }
  }

  error() {
    this._snackBar.open('Email o contraseña ingresado son invalidos', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, 1500)
  }

  visibility(){
    this.showPassword = !this.showPassword;
  }
}

