import { HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-HTTP';

  public serveri=[
    {
      ime: 'Glavni',
      kapacitet:  10,
      id: this.generisiId()
    },
    {
      ime: 'Aktivni',
      kapacitet:  10,
      id: this.generisiId()
    }
  ]

  onDodajServer(ime: string){
    this.serveri.push({
      ime: ime,
      kapacitet: 50,
      id: this.generisiId()
    });
  }

  constructor(private serverService: ServerService){}
  zapamti(){
    this.serverService.skladistiServere(this.serveri).subscribe(
      (response: HttpEvent<Object>) => console.log(response),
      (error) => console.log(error)
    )
  }

  vrati(){
  this.serverService.vratiServere()
  .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
}

  private generisiId(){
    return Math.round(Math.random()*10000);
  }
}
