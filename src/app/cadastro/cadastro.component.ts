import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button"
import { Client } from './client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule,
    MatCardModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule],

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent implements OnInit {
  client: Client = Client.newClient();
  updating: boolean = false;

  constructor(private service: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params']
      const id = params['id']
      if (id) {
        this.updating = true;
        this.client = this.service.searchClientId(id) || Client.newClient();
      }
    })
  }

  save() {
    if(!this.updating){
    this.service.save(this.client);
    this.client = Client.newClient();
    } 
    else {
      this.service.update(this.client);
      this.router.navigate(['/consulta'])
    }
  }
}