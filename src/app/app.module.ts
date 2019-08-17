import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { BookmarkGroupComponent } from './bookmark-group/bookmark-group.component';
import { SharedModule } from './shared/shared-module.module';
import { BookMarkService } from './service/bookmark.service';
import { BookmarkSectionComponent } from './bookmark-group/bookmark-section/bookmark-section.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    GlobalFooterComponent,
    HeaderHomeComponent,
    BookmarkGroupComponent,
    BookmarkSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    BookMarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
