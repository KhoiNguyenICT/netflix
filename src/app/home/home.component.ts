import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  @ViewChild("headerComponent", { read: ViewContainerRef })
  headerComponent: ViewContainerRef;

  constructor(private readonly factoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadHeader();
  }

  async loadHeader() {
    const { HeaderComponent } = await import(
      "../_shared/components/header.component"
    );
    const factory = this.factoryResolver.resolveComponentFactory(
      HeaderComponent
    );
    this.headerComponent.createComponent(factory);
  }
}
