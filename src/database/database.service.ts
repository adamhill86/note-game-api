import { firebaseConfig } from '../../environment/firebase.config';
import * as firebase from 'firebase';

export class DatabaseService {
  private db: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
    this.db.settings({
      timestampsInSnapshots: true,
    });
  }

  public get database(): firebase.firestore.Firestore {
    return this.db;
  }
}
