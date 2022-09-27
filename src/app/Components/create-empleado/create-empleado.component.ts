import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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

  id: string | null;
  titulo = 'Agregar Empleado';

  constructor(private fb: FormBuilder,
              private _empleadoService: EmpleadoService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute
              ) {
    this.createEmpleado = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      RUT_Doc: ["", Validators.required],
      salario: ["", Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Editar();
  }

  agregarEmpleado() {
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
    }).catch(error=>{
      console.log(error);
      this.loading = false;
      this.acept = true;
    })
  }
  
  agregarEditarEmpleado(){
    this.submitted = true;
    if(this.createEmpleado.invalid){
      return;
    }

    if (this.id === null) {
      this.agregarEmpleado();
    }else{
      this.editarEmpleado(this.id);
    }
  }

  Editar(){
    if(this.id !== null){
      this.titulo = 'Editar Empleado';

      this._empleadoService.getEmpleado(this.id).subscribe(data=>{
      this.loading = false;
        this.createEmpleado.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          RUT_Doc: data.payload.data()['RUT'],
          salario: data.payload.data()['salario'],
        })
      })
    }
  }

  editarEmpleado(id: string){
    const empleado:any={
      nombre: this.createEmpleado.value.nombre,
      apellido: this.createEmpleado.value.apellido,
      RUT: this.createEmpleado.value.RUT_Doc,
      salario: this.createEmpleado.value.salario,
      fechaActualizacion: new Date()
    }

    this.loading = true;
    this._empleadoService.actualizarEmpleado(id, empleado).then(()=>{
      this.loading=false;
      this.toastr.info("El empleado se ha actualizado con éxito", "Empleado Actualizado");
      this.router.navigate(['/list-empleados']);
    })
  }


}
