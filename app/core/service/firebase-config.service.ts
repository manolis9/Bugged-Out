import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
require('firebase/database');

import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {

    private _database: firebase.database.Database;

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    public get database() {
        return this._database;
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    configureDatabase() {
        this._database = firebase.database();
    }
}