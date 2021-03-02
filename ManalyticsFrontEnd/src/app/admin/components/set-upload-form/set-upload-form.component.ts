import { Component, OnInit } from '@angular/core';
import { AdminCardService } from '../../services/admin-card.service';

@Component({
  selector: 'app-set-upload-form',
  templateUrl: './set-upload-form.component.html',
  styleUrls: ['./set-upload-form.component.css']
})
export class SetUploadFormComponent implements OnInit {

  fileUpload:FormData = new FormData();
  constructor(private service: AdminCardService) { }

  ngOnInit(): void {
  }
  onFileSelection(event) {
    let file, filename;
    if(event.target.files.length > 0) {
      file = event.target.files[0];
      filename = event.target.files[0].name;
      this.fileUpload.append("Database Upload", file, filename);
    }
    console.log(file);
    console.log(`filename: ${filename}`);
    console.log(this.fileUpload);

    this.service.postUploadedFile(this.fileUpload);
  }
  uploadButtonClicked() {
    document.getElementById("file").click();
  }
}
