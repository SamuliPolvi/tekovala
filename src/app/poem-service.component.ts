import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Poem } from "./poem";

@Injectable()
export class PoemService {

  constructor(private http: HttpClient) {  }

  async fetchPoems(): Promise<Poem[]> {
    let raw = await this.http.get('../assets/tekovala.txt', {responseType: 'text'}).toPromise().then(res => this.poemParser(res))
    return raw;
  }

  poemParser(rawData) {
    const lines = rawData.split('\n');
    let _chapter = '';
    let poems = [];
    let index = 0;
    lines.map(line => {
      if (line !== '' || line === ' ') {
        _chapter += '\n' + line;
      } else {
        index++;
        _chapter !== '' && poems.push(new Poem(index, _chapter));
        _chapter = '';
      }
    })
    return poems
  }

}