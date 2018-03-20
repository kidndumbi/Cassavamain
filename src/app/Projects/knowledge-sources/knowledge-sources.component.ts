import { KnowledgeService } from './Services/knowledge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-sources',
  templateUrl: './knowledge-sources.component.html',
  styleUrls: ['./knowledge-sources.component.css']
})
export class KnowledgeSourcesComponent implements OnInit {
  
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'white'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'}

  ];
  panelOpenState: boolean = false;
  sources: any[];

  constructor(private kServe: KnowledgeService) { }

  ngOnInit() {
     
      this.kServe.getAllKnowledgeSources()
      .subscribe(data => {
          console.log(data);
          this.sources = data;
      });

  }

  DeleteSource(parentId, sourceId){
      this.kServe.deleteSource(parentId, sourceId)
      .subscribe(data => {
           
      })
  }

}
