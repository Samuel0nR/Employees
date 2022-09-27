import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { EmpleadoService } from "src/app/Service/empleado.service";

@Component({
  selector: "app-create-empleado",
  templateUrl: "./create-empleado.component.html",
  styleUrls: ["./create-empleado.component.css"],
})
export class CreateEmpleadoComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;

  acept = true;
  loading = false;

  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private router: Router,
              private toastr: ToastrService,
              ) {
    this.createEmpleado = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      RUT_Doc: ["", Validators.required],
      salario: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  agregarEmpleado() {
    console.log(this.createEmpleado);

    if(this.createEmpleado.invalid){
      return;
    }

    const empleado:any={
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      RUT: this.createEmpleado.value.RUT_Doc,
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    this.loading = true;
    this.acept = false;

    this._empleadoService.agregarEmpleado(empleado).then(() =>{
      this.toastr.success("El Empleado fue registrado con éxito", 'Empleado Registrado')
      this.loading = false;
      this.acept = true;

      this.router.navigate(['/list-empleados'])
      console.log(empleado);
    }).catch(error=>{
      console.log(error);
      this.loading = false;
      this.acept = true;

    })

  }  
  

}
