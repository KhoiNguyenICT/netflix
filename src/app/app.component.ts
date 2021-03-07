import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="">Home</a>
        </li>
        <li>
          <a routerLink="/watch">Watch</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "netflix";
}
