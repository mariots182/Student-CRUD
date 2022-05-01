import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {
    axios.defaults.baseURL = environment.apiUrl;
  }

  handleErrors(error: string) {
    if (error !== '') {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error);
    }
  }
}
