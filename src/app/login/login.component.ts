import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private auth: Auth,
    private router: Router) {
    this.form = this._fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
  }

  get email(): string { return this.form.get('usuario')?.value; }
  get password(): string { return this.form.get('contrasenia')?.value; }

  ngOnInit(): void {

  }

  onLogin() {
    if (this.form.invalid) {
      console.error("formulario invalido");
      return;
    }

    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(response => {
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  onSingup() {

    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(response => {
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  onLoginConGoogle() {

    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(async (response) => {
        this.router.navigate(['invitados']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onLoginConFacebook() {

    signInWithPopup(this.auth, new FacebookAuthProvider())
      .then(async (response) => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
