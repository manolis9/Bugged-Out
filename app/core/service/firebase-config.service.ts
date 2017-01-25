import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {
    constructor() {
        this.configureApp();
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}