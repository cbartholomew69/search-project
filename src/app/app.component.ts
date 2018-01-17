import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  template: '<profile></profile>',
  providers: [GithubService]
  
})
export class AppComponent { }
