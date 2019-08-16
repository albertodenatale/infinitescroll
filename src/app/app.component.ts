import { Component, ViewChild } from '@angular/core';
import { MocksService } from './services/MocksService';
import { Observable } from 'rxjs';
import { Mock } from './models/models';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allMocks:Array<Mock>;

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewPort: CdkVirtualScrollViewport;
  
  constructor(private mockService:MocksService) {
    
  }

  ngOnInit(){
    this.mockService.getAll().subscribe((data) => this.allMocks = data);
  }

  getRandomColour(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    switch(randomNumber){
      case 1: return 'red'; break;
      case 2: return 'greenyellow'; break;
      case 3: return 'yellow'; break;
      case 4: return 'blue'; break;
      case 5: return 'orange'; break;
      case 6: return 'pink'; break;
    }

    return 'red';
  }

  getNewData(){ 
    var endData = this.viewPort.getRenderedRange().end;

    if(this.allMocks && endData === this.allMocks.length){
      this.mockService.getAll().subscribe((data) => this.allMocks = [ ...this.allMocks, ...data]);
    }
  }
}
