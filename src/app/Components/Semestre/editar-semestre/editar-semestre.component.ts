import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-semestre',
  templateUrl: './editar-semestre.component.html',
  styleUrls: ['./editar-semestre.component.css']
})
export class EditarSemestreComponent implements OnInit {
  semestres:Semestre[];
  constructor() { }

  ngOnInit(): void {
  
  }
}
