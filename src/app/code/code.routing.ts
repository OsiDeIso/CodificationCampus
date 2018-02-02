import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormreservationComponent } from './formreservation/formreservation.component';
import { FormcodificationComponent } from './formcodification/formcodification.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CodeComponent } from './code.component';


const codeRoutes: Routes = [
    { path: '', component: CodeComponent,
        children: [
            { path: '', component: AcceuilComponent },
            { path: 'reservation', component: FormreservationComponent },
            { path: 'codification', component: FormcodificationComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(codeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CodeRoutingModule { }