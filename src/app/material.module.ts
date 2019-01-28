import { NgModule } from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule
  ]
})

export class MaterialModule {}
