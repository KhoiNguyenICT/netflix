import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  @ViewChild("headerComponent", { read: ViewContainerRef })
  headerComponent: ViewContainerRef;

  @ViewChild("footerComponent", { read: ViewContainerRef })
  footerComponent: ViewContainerRef;

  videos$: Observable<any[]>;

  constructor(
    private readonly factoryResolver: ComponentFactoryResolver,
    private readonly firestoreService: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.loadHeader();
    this.loadFooter();
    this.videos$ = this.firestoreService.collection("videos").valueChanges();
  }

  async loadHeader() {
    const { HeaderComponent } = await import(
      "../_shared/components/header-component/header.component"
    );
    const factory = this.factoryResolver.resolveComponentFactory(
      HeaderComponent
    );
    this.headerComponent.createComponent(factory);
  }

  async loadFooter() {
    const { FooterComponent } = await import(
      "../_shared/components/footer-component/footer.component"
    );
    const factory = this.factoryResolver.resolveComponentFactory(
      FooterComponent
    );
    this.footerComponent.createComponent(factory);
  }
}
