import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

@NgModule({
    imports: [ ],
    declarations: [ ],
    exports: [ ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule ) {
        if (parentModule) {
            throw new Error("CoreModule exists already. Only import in the root/app module");
        } 
    }
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ ]
        };
    }

 }