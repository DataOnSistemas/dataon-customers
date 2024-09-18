import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private readonly http: HttpClient) { }


  public onLoadAnimais(doID: number, pIDPessoa: number) : Observable<any> {
    return this.http.get(`vet/VetAnimais/WebInvoke_loadByIDPessoa?doID=${doID}&pIDPessoa=${pIDPessoa}`);
  }

}
