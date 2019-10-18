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
    private router: Router) { 
      let id =this.route.snapshot.paramMap.get('id')
      this.clienteService.getById(id).subscribe(response => {
        console.log(response);
      });
      
    }


  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      direccion: ['', [Validators.required]]
    });
    let id = this.route.snapshot.paramMap.get('id')
    if(id!=null){
      this.clienteService.getById(id).subscribe(response =>{
        this.clienteForm.setValue(response);
        console.log(response)
      })
    }
  }
  save(){
    console.log(this.clienteForm.value)
    let id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.clienteService.update(id, this.clienteForm.value)
      .subscribe(response=>{
       console.log(response);
      });
    }else{
      this.clienteService.add(this.clienteForm.value).subscribe(response=>{
        console.log("ADD", response);
      });
    }
    
    this.router.navigate(['/cliente']);
  }
}
