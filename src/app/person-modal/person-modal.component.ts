import { Component, ViewChild, OnInit, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

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
  @Input() diff = 0;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() callHistory = new EventEmitter();
  @Output() incallEvent = new EventEmitter();

  callDurationHolder: ElementRef;

  @ViewChild('callDuration', null) set content(content: ElementRef) {
    this.callDurationHolder = content;
  }

  constructor() {
  }

  ngOnInit() {     
  }

  callHistoryBtnClicked() {
    this.callHistory.emit();
  }

  incallBtnClicked() {
    this.incallEvent.emit(this.callDurationHolder.nativeElement.innerText);
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
