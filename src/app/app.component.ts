import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '300px', height: '400px'
    });

  }

  openReadDialog() {
    const dialogRef = this.dialog.open(ReadComponent, {
      width: '400px'
    });

  }

  openUpdateDialog() {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '300px'
    });

  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px'
    });
  }
}
