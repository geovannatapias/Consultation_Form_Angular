import { v4 as uuid } from 'uuid'


export class Client {
    id?: string;
    name?: string;
    cpf?:string;
    birth?: string
    email?:string;

    static newClient(){
        const client = new Client();
        client.id = uuid();  //create new id to client
        return client;
    }
    


}