import { KnowledgeService } from './Services/knowledge.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditAddUpdateModalComponent } from './components/edit-add-update-modal/edit-add-update-modal.component';


@Component({
  selector: 'app-knowledge-sources',
  templateUrl: './knowledge-sources.component.html',
  styleUrls: ['./knowledge-sources.component.css']
})
export class KnowledgeSourcesComponent implements OnInit {


  panelOpenState: boolean = false;
  sources: any[];

  constructor(private kServe: KnowledgeService, private dialog: MatDialog) { }

  ngOnInit() {

    this.GetAllKnowledgeSources();

  }

  GetAllKnowledgeSources() {
    this.kServe.getAllKnowledgeSources()
      .subscribe(data => {
        console.log(data);
        this.sources = data;
      });
  }

  DeleteSource(parentId, sourceId) {
    this.kServe.deleteSourceItem(parentId, sourceId)
      .subscribe(data => {
        this.GetAllKnowledgeSources();
      },
      err => { console.log("something happened when saving item") }
    );
  }


  addNew(source){
    this.openDialog(source);
  }

  openDialog(source): void {
    let dialogRef = this.dialog.open(EditAddUpdateModalComponent, {
      height: '600px',
      width: '600px',
      data: source
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.GetAllKnowledgeSources();

    });
  }

}
