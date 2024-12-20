import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'spells',
    loadChildren: () =>
      loadRemoteModule('pfdspells', './Routes').then((m) => m.appRoutes),
  },
];
