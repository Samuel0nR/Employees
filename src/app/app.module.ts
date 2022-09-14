import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ListEmpleadosComponent } from "./Components/list-empleados/list-empleados.component";
import { CreateEmpleadoComponent } from "./Components/create-empleado/create-empleado.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
