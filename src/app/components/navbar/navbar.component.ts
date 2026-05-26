import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  // recordar que siempre se puede desestructurar, por ejemplo title y path
  routes = routes.map((route) => ({
    title: route.title ?? '',
    path: route.path ?? '',
  }));
}
