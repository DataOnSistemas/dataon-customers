import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicQuery } from './dynamic-query';

@Injectable({
  providedIn: 'root'
})
export class DynamicQueryService {

  constructor(private readonly http: HttpClient) { }

  public onDynamicQueryByContext(dynamicQuery: DynamicQuery) : Observable<any> {
    return this.http.get(`dataOn/doExplorer/DynamicQueryByContext?doID=${dynamicQuery.doID}&doIDUser=${dynamicQuery.doIDUser}&context=${dynamicQuery.context}&criterion=${dynamicQuery.criterion}&sorters=${dynamicQuery.sorters}&fuso=${dynamicQuery.fuso}&filter=${dynamicQuery.filter}&page=${dynamicQuery.page}&start=${dynamicQuery.start}&limit=${dynamicQuery.limit}`);
  }
}
