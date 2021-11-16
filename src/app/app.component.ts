import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontangular';

  public searchText: string = '';
  public entries: string[]=[];

  public handleList(): void{
    fetch('http://localhost:4000')
        .then(response => response.json())
        .then(data => {
            this.entries = data.map((x:any) => Object.values(x).join(' - '))
        });
  }
  public handleSearch(): void{
    fetch('http://localhost:4000/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: this.searchText
            })
        })
        .then(response => response.json())
        .then(data => {
            this.entries = data.map((x:any) => Object.values(x).join(' - '))
        });
  }
}
