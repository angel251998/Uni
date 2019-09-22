import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

// tslint:disable-next-line: class-name
export interface servi {
  description: string;
  nombre: string;
  id: string;
  valor: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiService {

  constructor(private db: AngularFirestore) { }

  getComidas() {
    return this.db.collection('servicios').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as servi;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
}
