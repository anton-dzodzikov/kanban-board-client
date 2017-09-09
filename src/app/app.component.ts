import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['styles.css'],
  template: `      
      <div class="board">
          <div class="column">
              <div class="column-title">To Do</div>
              <div class="column-body">tickets</div>
          </div>
          <div class="column">
              <div class="column-title">In Progress</div>
              <div class="column-body">tickets</div>
          </div>
          <div class="column">
              <div class="column-title">Complete</div>
              <div class="column-body">tickets</div>
          </div>
      </div>
  `
})
export class AppComponent  { name = 'Angular'; }
