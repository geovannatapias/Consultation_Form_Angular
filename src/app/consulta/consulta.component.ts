import { Component, OnInit, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from '@angular/material/snack-bar'
import { ClientService } from '../client.service';
import { Client } from '../cadastro/client';
import { Router } from '@angular/router';
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

  nameSearch: string = '';
  listClients: Client[] = [];
  columnsTable: string[] = ["id", "name", "cpf", "birth", "email", "actions"];
   snack: MatSnackBar = inject(MatSnackBar);

  deleting : boolean = false;
  clientToDelete?: Client;

  constructor(private service: ClientService,
    private router: Router) {
  }
  ngOnInit() {
    this.listClients = this.service.searchClients('');
  }
  search() {
    this.listClients = this.service.searchClients(this.nameSearch);
  }
  prepareEdit(id: string) {
    this.router.navigate(['/cadastro'], { queryParams: { "id": id } })
  }
  prepareDelete(client : Client) {
    this.clientToDelete = client;
    this.deleting = true;
  }
  delete() {
    if (!this.clientToDelete) return;
    this.service.delete(this.clientToDelete);
    this.listClients = this.service.searchClients('');
    this.deleting = false;
    this.clientToDelete = undefined;
    this.snack.open('Item deleted successfully',"ok");
  }
}
