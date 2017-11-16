import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

	player={name:"", position:""}

	constructor(private _playerService: PlayerService, private _router: Router) { }

	ngOnInit() {
	}

	onSubmit(){
		this._playerService.create(this.player, (createres)=>{
			this._router.navigateByUrl('/players/list');
		})
	}
}
