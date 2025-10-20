import { Component, OnInit, Inject, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Client } from './client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import{ NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BrazilapiService } from '../brazilapi.service';
import { Municipality, State } from '../brasil.models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule,
    MatCardModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    NgxMaskDirective,
    CommonModule,
  ], providers: [
    provideNgxMask()
  ],

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent implements OnInit {
  client: Client = Client.newClient();
  updating: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);
  states: State[] = [];
  municipalities: Municipality[] = [];

  constructor(private service: ClientService,
    private brazilApiService: BrazilapiService,
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
        if(this.client.uf){
          const event = {value: this.client.uf }
          this.loadMunicipalities(event as MatSelectChange);
        }
      }
    })
  this.loadUFs();
  }
  loadUFs() {
    this.brazilApiService.listUfs().subscribe({
      next: listStates => this.states = listStates,
      error: erro => console.log("ocorreu um erro: ", erro)
    })
  }
  loadMunicipalities(event: MatSelectChange) {
    const ufSelect = event.value;
    this.brazilApiService.listMunicipalities(ufSelect).subscribe({
      next: listMunicipalities => this.municipalities = listMunicipalities,
      error: errro => console.log('An error occurred!', errro)
    })
  }
  save() {
    if(!this.updating){
    this.service.save(this.client);
    this.client = Client.newClient();
    this.showMessage('Saved successfully!');
    } 
    else {
      this.service.update(this.client);
      this.router.navigate(['/consulta'])
       this.showMessage('Updated successfully!');
    }
  }
    showMessage(message: string) {
      this.snack.open(message,"ok")
    } 
}