import { environment } from "./../environments/environment";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    {
      provide: BUCKET,
      useValue: "netflix",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
