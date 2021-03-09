import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
})
export class HeaderComponent {}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
})
class HeaderModule {}
