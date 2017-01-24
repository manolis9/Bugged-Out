// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

// Component
import { BugListComponent } from './bug-list/bug-list.component';

@NgModule ({
    imports: [
        SharedModule,
        BugRoutingModule
     ],
    declarations: [
        BugListComponent
     ],
    exports: [ ],
    providers: [ ]
})
export class BugModule { }