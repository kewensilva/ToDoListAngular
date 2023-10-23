import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Card } from '../models/card.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor() {

  }

  card: Card = new Card('', [
    new Column('Ideias', ['Projeto Kanban', 'Estudar AngularJS', 'Blog Pessoal', 'Responder Issues', 'Atualizar Github', 'Deploy do Web Site Milli', 'Resolver Bug Back-End NodeJS']),
    new Column('Tarefa', ['Finalizar API ']),
    new Column('Progresso', ['Project Working Time']),
    new Column('Concluído', ['Clean Code Project']),
  ])

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }
}