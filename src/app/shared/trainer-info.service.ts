import { Injectable } from '@angular/core';
import { Trainer } from './trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerInfoService {

  private trainers :Trainer[] =[
    new Trainer('Lalu','Male',9155556666),
    new Trainer('Prasad','Male',9155556666),
    new Trainer('Shalu','Female',9155556666),
    new Trainer('Rabdi','Female',9155556666),
    new Trainer('Sunita','Female',9155556666),
    new Trainer('Ganya','Male',9155556666),
    new Trainer('Lalita','Female',9155556666),
    new Trainer('Ramu','Male',9155556666),
  ];

  constructor() { }

  getTrainers(){
    return this.trainers.slice();
  }
}
