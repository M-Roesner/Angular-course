import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // with signal since Angualr v17.3

  ngOnInit() {
    console.log('OnInit');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log('title:' + title);
    console.log('ticketText:' + ticketText);
    this.form?.nativeElement.reset(); // Reset the form after submission

    // Alternatively, you can pass the 'form' template variable as an angument
    // to the onSubmit() like the title and then reset it:
    // form.reset();
  }
}
