import { SQLite } from '@ionic-native/sqlite/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private sqlite: SQLite) {
    sqlite.create({
      name: 'drugIndex.db',
      location: 'default',
      key: 'password',
    })
  }
}
