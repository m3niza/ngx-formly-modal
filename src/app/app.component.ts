import {Component, OnInit} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ModalExampleComponent} from './modal-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  model: any;

  fields: FormlyFieldConfig[];

  form: FormGroup;

  constructor(private matDialog: MatDialog) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name'
        }
      },
      {
        key: 'nickname',
        type: 'input',
        templateOptions: {
          label: 'Nickname',
          click: (field: FormlyFieldConfig, event: {detail: number}) => {
            if (event.detail === 2) {
              this.dialog(field);
            }
          }
        }
      }
    ];
  }

  submit(): void {
    console.log(this.form.value);
  }

  private dialog(field: FormlyFieldConfig): void {
    const dialogRef = this.matDialog.open(ModalExampleComponent, {width: '50%'});

    dialogRef.afterClosed().subscribe((data: string) => field.formControl.setValue(data));
  }
}
