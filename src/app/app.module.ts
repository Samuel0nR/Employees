import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';


import { ListEmpleadosComponent } from "./Components/list-empleados/list-empleados.component";
import { CreateEmpleadoComponent } from "./Components/create-empleado/create-empleado.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { VerEmpleadoComponent } from './Components/ver-empleado/ver-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    NavbarComponent,
    VerEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
