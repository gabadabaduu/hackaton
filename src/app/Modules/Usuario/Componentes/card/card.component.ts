import { Component,EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageSrc: string | undefined;
  @Input() placeText: string | undefined;
  @Input() moneyText: string | undefined;
  @Output() cardClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.cardClicked.emit();
  }
}
