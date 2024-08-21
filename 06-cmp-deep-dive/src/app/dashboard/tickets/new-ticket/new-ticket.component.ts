import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form'); // with signal since Angualr v17.3

  onSubmit(title: string, ticketText: string) {
    console.log('title:' + title);
    console.log('ticketText:' + ticketText);
    this.form()?.nativeElement.reset(); // Reset the form after submission

    // Alternatively, you can pass the 'form' template variable as an angument
    // to the onSubmit() like the title and then reset it:
    // form.reset();
  }
}
