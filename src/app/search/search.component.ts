import { Component, OnInit } from '@angular/core';
import { TrainerInfoService } from '../shared/trainer-info.service';
import { Trainer } from '../shared/trainer.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  trainers?: Trainer[];
 
  constructor(private trainerService: TrainerInfoService) { }

  ngOnInit(): void {
  
    this.trainers = this.trainerService.getTrainers();
  }

}
