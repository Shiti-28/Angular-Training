import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { Students } from './students.model';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudproject';
}
