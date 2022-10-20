import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { EmpleadoService } from "src/app/Service/empleado.service";

@Component({
  selector: "app-ver-empleado",
  templateUrl: "./ver-empleado.component.html",
  styleUrls: ["./ver-empleado.component.css"],
})
export class VerEmpleadoComponent implements OnInit {
  titulo: any = "Empleado";
  forma: FormGroup;
  id: string | any;

  constructor(
    private fb: FormBuilder,
    private _empleadoService: EmpleadoService,
    private aRoute: ActivatedRoute
  ) {
    this.forma = new FormGroup({});
    this.forma = this.fb.group({
      RUT_Doc: ["", Validators.required],
      salario: ["", Validators.required],
      descrip: ["", Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.viewEmpleado();
  }

  viewEmpleado() {
    if (this.id !== null) {
      this._empleadoService.getEmpleado(this.id).subscribe((data) => {
        const {nombre,apellido,RUT,salario,descripcion} = data.payload.data();
        this.titulo = nombre + " " + apellido;
        this.forma.setValue({
          RUT_Doc: RUT,
          salario: salario,
          descrip: descripcion,
        });
      });
    }
  }
}
