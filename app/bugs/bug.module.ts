// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

// Component
import { BugListComponent } from './bug-list/bug-list.component'
import { BugDetailComponent } from './bug-detail/bug-detail.component';

//Service
import { BugService } from './service/bug.service';

@NgModule ({
    imports: [
        SharedModule,
        BugRoutingModule
     ],
    declarations: [
        BugListComponent,
        BugDetailComponent
     ],
    exports: [ ],
    providers: [ 
        BugService
         ]
})
export class BugModule { }