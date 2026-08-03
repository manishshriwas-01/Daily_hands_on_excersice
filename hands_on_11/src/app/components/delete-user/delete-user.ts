import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user-service';

@Component({
  selector: 'app-delete-user',
  imports: [ReactiveFormsModule],
  templateUrl: './delete-user.html',
  styleUrl: './delete-user.css'
})
export class DeleteUserComponent {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  deleteForm = this.fb.group({
    id: [1, Validators.required]
  });

  onDelete(): void {

    if (this.deleteForm.invalid) {
      this.deleteForm.markAllAsTouched();
      return;
    }

    const id = this.deleteForm.value.id!;

    this.userService.deleteUser(id).subscribe({

      next: () => {

        console.log('User Deleted Successfully');

        alert('User Deleted Successfully');

        this.deleteForm.reset();

      },

      error: (err) => {

        console.error(err);

        alert('Something went wrong');

      }

    });

  }

}