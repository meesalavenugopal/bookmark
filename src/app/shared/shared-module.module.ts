import { NgModule } from '@angular/core';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
    imports: [ ],
    declarations: [ 
        SafePipe
    ],
    exports: [
        SafePipe
    ]
})
export class SharedModule { }