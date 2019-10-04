import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;
  constructor( private route: ActivatedRoute,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      direccion: ['', [Validators.required]]
    });
  }
save(d){
  console.log(this.clienteForm.value)
  this.clienteService.add(this.clienteForm.value).subscribe(response=>{
    console.log(response);
    
  });
  this.router.navigate(['/cliente']);
}

}
