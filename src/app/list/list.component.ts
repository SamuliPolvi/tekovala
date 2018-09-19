import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';
import { PoemService } from '../poem-service.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  poems: Poem[];

  constructor(private poemService: PoemService) { }

  ngOnInit() {
    this.poemService.fetchPoems().then(poems => this.poems = poems)
  }

}
