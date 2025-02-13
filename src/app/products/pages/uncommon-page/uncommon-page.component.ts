import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Alejandro';
  public gender: 'male'|'female'|'no existe' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient(): void {
    if(this.gender === 'male') {
      this.name = 'Sara';
      this.gender = 'female';
    } else {
      this.name = 'Alejandro';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Alejandro','Sara','Eduardo','Melissa']
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos personas esperando',
    'other': 'Tenemos # clientes esperando',
  }

  public deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(1000)
  .pipe(
    tap( value => console.log('tap: ',value) ),
  );

  public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre';
    }, 3500);
  })


}
