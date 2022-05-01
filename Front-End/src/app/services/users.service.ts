import { EventEmitter, Injectable } from '@angular/core';
import { id } from '@swimlane/ngx-datatable';
import axios from 'axios';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList = new EventEmitter<{}>();

  constructor(private globalService: GlobalService) {}

  peticion(tipo: any) {
    return new Promise((resolve, reject) => {
      // this.showProgressBar.emit(true);
      tipo
        .then((response: any) => {
          // this.showProgressBar.emit(false);
          resolve(response);
        })
        .catch((e: any) => {
          this.globalService.handleErrors(e.message);
          // this.showProgressBar.emit(false);
          reject(e);
        });
    });
  }

  getUsers(params = {}) {
    params = {
      page: 0,
      size: 10,
      enablePagination: false,
    };

    return this.peticion(
      axios.get('/student', { params: params || {} }).then((response: any) => {
        this.userList.emit(response.data);
      })
    );
  }

  postUser(data: any) {
    console.log(data);
    return this.peticion(axios.post('/student', data)).then((data) => {
      console.log(data);
      this.getUsers();
    });
  }

  putUser(data: any) {
    return this.peticion(axios.put('/student', data)).then(() => {
      this.getUsers();
    });
  }

  deleteUser(id: any) {
    return this.peticion(axios.delete('/student/' + id)).then(() => {
      this.getUsers();
    });
  }
}
