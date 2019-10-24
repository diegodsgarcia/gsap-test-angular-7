import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MapperFrom, MapperTo, MapperListResultFrom } from '../../decorators';
import { Acompanhamento, AcompanhamentoSchema, AcompanhamentoSource } from '../../model/acompanhamento';
import { BoletagemConsultaSource } from '../../model/boletagem-consulta';
import { ListResultSource } from '../../model/list-result';

@Injectable()
export class PlaygroundService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  @MapperFrom(AcompanhamentoSource)
  listarAcompanhamentos(): Observable<Acompanhamento> {
    const url = 'http://10.227.11.212:8080/api/v1/reserva/acompanhamanto/2019-10-10';
    return this.http.get<Acompanhamento>(url);
  }

  @MapperListResultFrom(ListResultSource, BoletagemConsultaSource)
  listarConsultaBoletagem() {
    const url = 'http://10.227.11.212:8080/api/v1/boletagem/consulta?itemPerPage=15&pageNo=1';

    const body = {
      dat_ini: '2019-10-16',
      dat_fim: '2019-10-16',
      id_sit_tra: 1,
      id_sit_msg: '',
      gru_msg: '',
      cod_msg: '',
      vr_fin_ini: 0,
      vr_fin_fin: 0,
      flg_mdl: 'S',
    };

    return this.http.post<any>(url, body);
  }

  @MapperTo(AcompanhamentoSchema)
  incluirAcompanhamentos(acompanhamento: Acompanhamento): Observable<Acompanhamento> {
    return of(acompanhamento);
  }

}
