import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoadApiDataService {
  constructor(public http: HttpClient) {}

  load(api: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe(
        data => {
          resolve(data);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
