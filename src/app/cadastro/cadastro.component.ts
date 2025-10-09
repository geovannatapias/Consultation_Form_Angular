import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button"
import { Client } from './client';
import { ClientService } from '../client.service';

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
export class CadastroComponent {
client: Client = Client.newClient();

constructor(private service: ClientService){

}
save() {
  this.service.save(this.client);
  }
}
