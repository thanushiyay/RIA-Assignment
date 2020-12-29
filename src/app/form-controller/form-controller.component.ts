import { Component, Input, OnInit, Type } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-controller',
  templateUrl: './form-controller.component.html',
  styleUrls: ['./form-controller.component.css']
})
export class FormControllerComponent implements OnInit {


  constructor() { }

  @Input() objectValue: Object;
  public model: NgbDateStruct;
  public dateModal: NgbDateStruct;
  public inputType;

  ngOnInit(): void {

    this.inputType = typeof this.objectValue;

    if (this.inputType === 'string' && (new Date(this.objectValue.toString()).toDateString() != 'Invalid Date')) {
      this.inputType = 'date';
      let parts = (this.objectValue.toString()).split('/');
      this.dateModal = { year: +parts[2], month: +parts[1], day: +parts[0] } as NgbDateStruct;
    }
  }
}
