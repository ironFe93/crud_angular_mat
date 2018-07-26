import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  response: String = '';
  updateUserForm: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.createForm();
  }

  createForm() {
    this.updateUserForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      job: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit()  {
    if (this.updateUserForm.valid) {
      const user = this.updateUserForm.value;
      this.crudService.create(user).subscribe( x => this.response = JSON.stringify(x));
    } else {
      this.response = 'Form invalid';
    }

  }


}
