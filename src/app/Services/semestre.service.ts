import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semestre } from '../models/semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private httpHeaders = new HttpHeaders({'Conten-Type': 'application/json'});
  private semestreUrl: string = 'http://localhost:9090/semestres';//endpoint
  constructor(private http: HttpClient) { }
  getSemestres():Observable<Semestre[]>{
    return this.http.get<Semestre[]>(this.semestreUrl+'/all');
  }
  getSemestre(id:number):Observable<Semestre[]> {
    return this.http.get<Semestre[]>(this.semestreUrl+'/'+id);
  }
  addSemestre(semestre: Semestre): Observable<number>{
    return this.http.post<number>(this.semestreUrl+"/add", semestre, {headers:this.httpHeaders});
  }

  deleteSemestre(semestre: Semestre) {
    return this.http.delete(this.semestreUrl+'/delete/'+semestre.ID_SEMESTRE);
  }

  updateSemestre(semestre: Semestre) {
    return this.http.put(`${this.semestreUrl}/update/`, semestre);
  }
}
