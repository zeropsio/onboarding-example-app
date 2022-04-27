import { AfterViewInit, Component } from '@angular/core';
import { Record } from './records.service';
import { RecordsService } from './records.service';

@Component({
  selector: 'zr-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

  record: Record;

  constructor(private _recordsService: RecordsService) { }

  ngAfterViewInit() {
    this.loadTodos();
  }

  loadTodos() {
    this._recordsService
      .get$()
      .subscribe((record) => this.record = record);
  }

}
