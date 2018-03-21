import { KnowledgeService } from './../../Services/knowledge.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-add-update-modal',
  templateUrl: './edit-add-update-modal.component.html',
  styleUrls: ['./edit-add-update-modal.component.css']
})
export class EditAddUpdateModalComponent implements OnInit {

  title: string;
  link:string;
  description:string;
  sourceItems: object;

  constructor(    public dialogRef: MatDialogRef<EditAddUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private kserve: KnowledgeService) {

         
     }

  ngOnInit() {
     
  }
   
  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem(link:string, description:string){
     this.sourceItems = {link: link, description:description};
     this.kserve.addSourceItem(this.data._id, this.sourceItems)
     .subscribe(data => {
        this.dialogRef.close(data);

     });

  }

}
