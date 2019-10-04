import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {
  list;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) { 
    this.listar();
  }

  ngOnInit() {
    this.listar();
  }

  delete(id) {
    console.log("cliente: "+ id );
    this.clienteService.delete(id).subscribe(response=>{
      console.log("de = " + JSON.stringify(response ))
      this.listar();
    });
    
    }
    listar(){
      this.clienteService.getlist().subscribe(response => {
        this.list= response;
      });
    }

}
