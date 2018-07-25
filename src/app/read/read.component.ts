import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  user: User;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  read(id: number) {
    this.crudService.read(id).subscribe(x => this.user = x.data);
  }

}
