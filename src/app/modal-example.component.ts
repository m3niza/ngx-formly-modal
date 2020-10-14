import {Component, OnInit} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  model: string;

  fields: FormlyFieldConfig[];

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.fields = [
      {
        key: 'nickname',
        type: 'input',
        templateOptions: {
          label: 'Nickname',
        }
      }
    ];
  }

  get selected(): string {
    return this.form.get('nickname').value;
  }
}
