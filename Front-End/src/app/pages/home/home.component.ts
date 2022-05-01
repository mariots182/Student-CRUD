import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { UsersService } from 'src/app/services/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('#modalMensaje') modal: ElementRef;

  usersList = [];
  columnEnabled = true;
  columnMode = ColumnMode;
  loadingIndicator = false;
  userForm: FormGroup;
  buttonSubmitted = false;
  editForm = false;
  formTitle = 'Agregar';
  messages = {
    emptyMessage: 'No hay datos para mostrar.',
    selectedMessage: 'Seleccionado',
    totalMessage: 'Registros',
  };
  columns = [
    {
      id: 0,
      name: 'id',
      prop: 'id',
      hidden: true,
      columnSize: '1',
      classIconFiltrar: '',
      classIconOrdenar: '',
      iconOrdenar: 'arrow-down',
    },
    {
      id: 1,
      name: 'Nombre',
      prop: 'name',
      columnSize: '2',
      classIconFiltrar: '',
      classIconOrdenar: '',
      iconOrdenar: 'arrow-down',
    },
    {
      id: 2,
      name: 'Apellido',
      prop: 'lastName',
      columnSize: '2',
      classIconFiltrar: '',
      classIconOrdenar: '',
      iconOrdenar: 'arrow-down',
    },
    {
      id: 3,
      name: 'Edad',
      prop: 'age',
      columnSize: '2',
      classIconFiltrar: '',
      classIconOrdenar: '',
      iconOrdenar: 'arrow-down',
    },
  ];

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.usersService.userList.subscribe((data: any) => {
      this.usersList = data.content;
    });

    this.userForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(18)]),
    });
  }

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  actionForm() {
    if (this.editForm) {
      this.putUser();
      this.editForm = false;
    } else {
      this.postUser();
    }
  }

  postUser() {
    this.buttonSubmitted = true;
    if (this.userForm.valid) {
      this.usersService.postUser(this.userForm.value);
      this.userForm.reset();
      this.buttonSubmitted = false;
    } else {
      alert('Formulario invalido');
      this.buttonSubmitted = false;
    }
  }

  putUser() {
    this.usersService.putUser(this.userForm.value).then((data) => {
      this.cancelForm();
    });
  }

  changeForm(event: any) {
    this.userForm.addControl(
      'id',
      new FormControl(event.id, Validators.required)
    );
    this.userForm.controls.name.setValue(event.name);
    this.userForm.controls.lastName.setValue(event.lastName);
    this.userForm.controls.age.setValue(event.age);
    this.formTitle = 'Editar';
    this.editForm = true;
  }

  cancelForm() {
    this.userForm.removeControl('id');
    this.userForm.reset();
    this.formTitle = 'Agregar';
    this.editForm = false;
  }

  deleteUser(event: any) {
    this.usersService.deleteUser(event.id);
  }
}
