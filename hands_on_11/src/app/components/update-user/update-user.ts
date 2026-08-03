import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user-service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.css'
})
export class UpdateUserComponent {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  userForm = this.fb.group({
    id: [1, Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  onUpdate() {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user: User = {
      id: this.userForm.value.id!,
      name: this.userForm.value.name!,
      email: this.userForm.value.email!
    };

    this.userService.updateUser(user.id, user).subscribe({

      next: (response) => {

        console.log('User Updated', response);

        alert('User Updated Successfully');

        this.userForm.reset();

      },

      error: (err) => {

        console.error(err);

        alert('Something went wrong');

      }

    });

  }

}