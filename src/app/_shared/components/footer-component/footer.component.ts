import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {}

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
})
class FooterModule {}
