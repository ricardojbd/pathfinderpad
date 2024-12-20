import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'pfd-spells',
  template: '<router-outlet></router-outlet>',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
