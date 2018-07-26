import { Component} from '@angular/core';
import { CrudService } from '../crud.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  response: String = '';
  createUserForm: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.createForm();
  }

  createForm() {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      job: ['']
    });
  }

  onSubmit()  {
    if (this.createUserForm.valid) {
      const user = this.createUserForm.value;
      this.crudService.create(user).subscribe( x => this.response = JSON.stringify(x));
    } else {
      this.response = 'invalid input';
    }
  }


}
