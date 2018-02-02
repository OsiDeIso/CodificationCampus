import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormreservationComponent } from './formreservation/formreservation.component';
import { FormcodificationComponent } from './formcodification/formcodification.component';
import { HttpClientModule } from '@angular/common/http';


import { CodeRoutingModule } from './code.routing';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CodeComponent } from './code.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CodeRoutingModule,
        HttpClientModule
    ],
    declarations: [
        CodeComponent,
        FormreservationComponent,
        FormcodificationComponent,
        AcceuilComponent
    ],
    providers: []
})
export class CodeModule { }