import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Bug } from '../model/bug';

@Injectable()
export class BugService {

    private bugsDbRef = this.fire.database.ref('/bugs');

    constructor(private fire: FirebaseConfigService) { }

    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                const newBug = bug.val() as Bug;
                obs.next(newBug);
            },
                err => {
                    obs.throw(err);
                });
        });
    }

    addBug(bug: Bug) {
        const newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Manolis',
            createdDate: Date.now()
        },
            err => console.error("Unable to add bug to Firebase -", err)
        );
    }
}