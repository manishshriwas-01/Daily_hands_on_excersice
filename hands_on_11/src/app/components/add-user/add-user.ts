import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user-service';
import { CreateUser } from '../../models/user/user';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUserComponent {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit(): void {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user: CreateUser = {
      name: this.userForm.value.name!,
      email: this.userForm.value.email!
    };

    this.userService.addUser(user).subscribe({
      next: (response) => {
        console.log('User Added Successfully', response);
        alert('User Added Successfully');
        this.userForm.reset();
      },
      error: (err) => {
        console.error(err);
        alert('Something went wrong');
      }
    });
  }
}