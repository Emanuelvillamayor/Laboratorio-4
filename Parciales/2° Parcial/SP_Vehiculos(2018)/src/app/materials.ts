import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [MatMenuModule,MatSelectModule,MatRadioModule,MatSortModule,MatProgressBarModule,MatSnackBarModule,MatGridListModule,MatTableModule,MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,MatInputModule],
  exports: [MatMenuModule,MatSelectModule,MatRadioModule,MatSortModule,MatProgressBarModule,MatSnackBarModule,MatGridListModule,MatTableModule,MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,MatInputModule],
})
export class MaterialsModule { }