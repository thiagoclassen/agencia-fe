import { Component, OnInit } from '@angular/core';
import { CurriculosService } from './curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css']
})
export class CurriculosComponent implements OnInit {

  curriculos: any[];

  constructor(private curriculosService: CurriculosService) { }

  ngOnInit() {
    this.curriculosService
    .listCurriculos()
    .subscribe(response => this.curriculos = response);
  }

}
