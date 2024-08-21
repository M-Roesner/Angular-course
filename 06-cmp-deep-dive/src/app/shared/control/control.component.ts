import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Read the comments in the html file!
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log(`Clicked on ${this.label}`);
  // }
  private el = inject(ElementRef);

  label = input.required<string>();

  onClick() {
    // console.log(`Clicked on ${this.label}`);
    // console.log(this.el);
  }
}
