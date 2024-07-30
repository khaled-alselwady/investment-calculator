import { NgModule } from '@angular/core';
import { UserInputComponent } from './user-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInputComponent],
  imports: [FormsModule],
  exports: [UserInputComponent],
})
export class UserInputModule {}
