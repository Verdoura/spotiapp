import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevas_canciones:any = [];
  loading:boolean;

  constructor(private spotifyServ:SpotifyService) {

    this.loading = true;
    spotifyServ.getNewReleases().subscribe((data:any)=>{
      console.log(data);
      this.nuevas_canciones = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
