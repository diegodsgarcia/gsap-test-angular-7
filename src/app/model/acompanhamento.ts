class Acompanhamento {
  identificadorCampo: string;
  descricaoCampo: string;
  valorCampo: number;
  tipoCalculado: boolean;
}

const AcompanhamentoSource = {
  identificadorCampo: 'nom_cam_v',
  descricaoCampo: 'dsc_cam_vr',
  valorCampo: 'vr_campo',
  tipoCalculado: 'flg_cam_cal',
};

const AcompanhamentoSchema = {
  nom_cam_v: 'identificadorCampo',
  dsc_cam_vr: 'descricaoCampo',
  vr_campo: 'valorCampo',
  flg_cam_cal: 'tipoCalculado',
};

export { Acompanhamento, AcompanhamentoSchema, AcompanhamentoSource };
