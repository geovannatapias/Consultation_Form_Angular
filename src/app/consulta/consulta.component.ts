import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button";
import { ClientService } from '../client.service';
import { Client } from '../cadastro/client';
@Component({
  selector: 'app-consulta',
  imports: [MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule, 
    CommonModule],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  listClients: Client[] = [];
  columnsTable: string[] = ["id", "name", "cpf", "birth", "email"]; 
  constructor(private service: ClientService) {
  }
  ngOnInit() {
    this.listClients = this.service.searchClients('');
  }
}
