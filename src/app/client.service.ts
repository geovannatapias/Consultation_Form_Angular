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
  searchClients(nameSearch: string): Client[] {
    const clients = this.obterStorage();
    if (!nameSearch) {
      return clients;
    }
    return clients.filter(client => client.name?.indexOf(nameSearch) !== -1)
  }

  searchClientId(id: string): Client | undefined {
    const clients = this.obterStorage();
    return clients.find(client => client.id === id)
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

