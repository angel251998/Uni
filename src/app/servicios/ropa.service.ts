import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

// tslint:disable-next-line: class-name
export interface ropas {
  description: string;
  nombre: string;
  id: string;
  valor: string;
}

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  constructor(private db: AngularFirestore) { }

  getRopas() {
    return this.db.collection('Ropa').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as ropas;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
}


