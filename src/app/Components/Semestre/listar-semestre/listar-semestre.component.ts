import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-semestre',
  templateUrl: './listar-semestre.component.html',
  styleUrls: ['./listar-semestre.component.css']
})
export class ListarSemestreComponent implements OnInit {
  semestres:Semestre[];
  constructor(private semestreService:SemestreService) { }

  ngOnInit(): void {
     //var data = this.cursos;
     this.semestreService.getSemestres().subscribe(
      (data) => {
      this.semestres= data['cursor_semestres'];
      console.log(this.semestres)
    }
    )
  }
  delSemestre(num:number):void{
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }
}
