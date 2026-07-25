import { Component ,signal} from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
     Name=signal("Manish");
     Role=signal("INTERN");
     Team=(signal("MEAN"));

}
