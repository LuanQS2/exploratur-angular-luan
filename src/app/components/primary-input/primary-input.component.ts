import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }
}
