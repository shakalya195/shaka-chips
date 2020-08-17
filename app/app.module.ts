import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';
import { TagsComponent } from './block/tags/tags.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [
    AppComponent
    ],
  declarations: [
    AppComponent,
    TagsComponent
    ],
  imports: [
    CoreModule,
    HelloFrameworkModule,
    CommonModule,
    FormsModule
  ],
})
export class AppModule {}
