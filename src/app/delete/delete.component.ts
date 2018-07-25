import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  status_code: number;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.crudService.delete(id).subscribe(x => this.status_code = x.status);
  }

}
