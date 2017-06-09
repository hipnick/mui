import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FullWidthDirective } from './directives/layout/full-width.directive';
import { MaterialComponent } from './directives/material/material.component';
import { FlexHeightDirective } from './directives/layout/flex-height.directive';
import { FlexWidthDirective } from './directives/layout/flex-width.directive';
import { FullHeightDirective } from './directives/layout/full-height.directive';
import { ContentDirective } from './directives/layout/content.directive';

@NgModule({
  declarations: [
    AppComponent,
    FullWidthDirective,
    MaterialComponent,
    FlexHeightDirective,
    FlexWidthDirective,
    FullHeightDirective,
    ContentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
