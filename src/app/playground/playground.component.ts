import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PlaygroundService } from './service/playground.service';
import { Acompanhamento } from '../model/acompanhamento';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  form: FormGroup;
  users$: Observable<any>;
  acompanhamentos$: Observable<Acompanhamento>;
  boletagens: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private playgroundService: PlaygroundService,
  ) {}

  ngOnInit() {
    this.acompanhamentos$ = this.playgroundService.listarAcompanhamentos();
    this.boletagens = this.playgroundService.listarConsultaBoletagem();

    this.boletagens.subscribe(boletagem => console.log(boletagem));
  }

  onBoxClick(acompanhamento: Acompanhamento) {
    this.playgroundService.incluirAcompanhamentos(acompanhamento).subscribe(datas => console.log(datas));
  }
}
