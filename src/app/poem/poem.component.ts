import { Component, OnInit, Input } from '@angular/core';
import { PoemService } from '../poem-service.component';
import { Poem } from '../poem';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  poem: Poem;
  poems: Poem[]

  constructor(private poemService: PoemService) { }

  ngOnInit() {
    this.poemService.fetchPoems().then(poems => {
      this.poems = poems
      this.getRandom()
    })
  }

  getRandom() {
    this.poem = this.poems[Math.floor(Math.random() * this.poems.length)]
  }

}
