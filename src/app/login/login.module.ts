import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginRoutingModule } from './login-routing.module';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './signin/signin.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    
    SigninComponent
  ],
  imports: [
    LoginRoutingModule,
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    FlexLayoutModule,    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
    
  ]
})
export class LoginModule { }
