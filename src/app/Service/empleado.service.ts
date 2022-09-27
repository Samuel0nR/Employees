import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmpleadoService {
  constructor(private firestore: AngularFirestore) {}

  getEmpleados(): Observable<any> {
    return this.firestore.collection("empleado", ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }

  agregarEmpleado(empleado: any): Promise<any> {
    return this.firestore.collection("empleado").add(empleado);
  }

  borrarEmpleado(id: string): Promise<any> {
    return this.firestore.collection("empleado").doc(id).delete();
  }
}
