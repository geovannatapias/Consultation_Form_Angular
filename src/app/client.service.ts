import { Injectable } from '@angular/core';
import { Client } from './cadastro/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  static Repo_Clients = "_CLIENTS"
  constructor() { }

  save(client: Client) {
    const storage = this.obterStorage();
    storage.push(client);
    localStorage.setItem(ClientService.Repo_Clients, JSON.stringify(storage));

  }
  searchClients(name: String): Client[] {
    return this.obterStorage();
  }

  private obterStorage(): Client[] {
    const repositoryclients = localStorage.getItem(ClientService.Repo_Clients);
    if (repositoryclients) {
      const clients: Client[] = JSON.parse(repositoryclients)
      return clients;
    }
    const clients: Client[] = [];
    localStorage.setItem(ClientService.Repo_Clients, JSON.stringify(clients));
    return clients;
  }
}

