import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	players;
	game;

	constructor(private _playerService: PlayerService, private _route: ActivatedRoute) {
		this._playerService.all((res)=>{
			this.players=res;
		});
		this._route.paramMap.subscribe((params)=>{
			this.game=params.get("num");
		});
	}

	ngOnInit() {
	}

	changeStatus(change, idx){
		this.players[idx]['game_'+this.game]=change;
		this._playerService.update(this.players[idx], (updateres)=>{
			this._playerService.all((res)=>{
				this.players=res;
			});
		})
	}
}
