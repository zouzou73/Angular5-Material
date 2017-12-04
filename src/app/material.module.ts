import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports: [MatButtonModule,MatCheckboxModule,MatDatepickerModule,MatTabsModule,MatRadioModule,MatProgressSpinnerModule,MatInputModule,MatToolbarModule,MatPaginatorModule,MatChipsModule,MatStepperModule,MatCardModule,MatSlideToggleModule],
  exports: [MatButtonModule,MatCheckboxModule,MatDatepickerModule,MatTabsModule,MatRadioModule,MatProgressSpinnerModule,MatInputModule,MatToolbarModule,MatPaginatorModule,MatChipsModule,MatStepperModule,MatCardModule,MatSlideToggleModule],
})
export class MaterialModule { }