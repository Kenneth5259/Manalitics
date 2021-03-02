import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCardService {

  constructor(private httpClient: HttpClient) { }

  postUploadedFile(file: FormData) {
    console.log("Post method submitted");
    this.httpClient.post<any>('', file).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
