import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss'],
  animations: [
    trigger('modal', [
      transition('void => *', [
        style({
        left: "100%" }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({
        left: "100%" }))
      ])
    ])
  ]
})
export class PersonModalComponent implements OnInit {
  @Input() visible: boolean;
  @Input() person: Object;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() callHistory = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  callHistoryBtnClicked() {
    this.callHistory.emit();
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
