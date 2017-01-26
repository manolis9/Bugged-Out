import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;

    constructor(private formB: FormBuilder) { }

    ngOnInit() {
        this.configureForm();
    }

    configureForm(){
        // this.bugForm = new FormGroup({
        //     title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(1, Validators.required),
        //     severity: new FormControl(1, Validators.required),
        //     description: new FormControl(null, Validators.required)
        // });

        this.bugForm = this.formB.group({
            title: [null, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [1, Validators.required],
            severity: [1, Validators.required],
            description: [null, Validators.required]
        });
    }

    submitForm() {
        console.log(this.bugForm); //TODO: REMOVE
    }
 }