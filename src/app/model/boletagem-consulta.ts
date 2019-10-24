class BoletagemConsulta {
  nomeModeloMensagem: string;
  numeroSequenciaTransacao: number;
  estadoTransacao: string;
  situacaoMensagem: string;
  codigoMensagem: string;
  dataInclusao: Date;
  dataMovimento: Date;
  valorFinanceiro: number;
  horaAbertura: Date;
  horaFechamento: Date;
  composicaoOperacao: string;
  produto: string;
  operacaoBancaria: string;
  sistema: string;
  liquidacao: string;
  sistemaOrigem: string;
  entidadeConveniada: string;
  usuarioUltimaManuntecao: string;
  qtdAutorizacao: number;
  dataReferencia: Date;
  prioridade: string;
  numeroUnicoOperacao: number;
  numeroControleMensagem: string;
  numeroControleMensagemOriginal: string;
  dominioSistema: string;
  tipoMensagem: string;
  tipoEntradaMensagem: string;
  dataUltimoProcessamentoEmissor: Date;
  numeroControleIF: string;
}

const BoletagemConsultaSource = {
  nomeModeloMensagem: 'nom_mdl_msg',
  numeroSequenciaTransacao: 'num_seq_tra',
  estadoTransacao: 'dsc_est_tra',
  situacaoMensagem: 'dsc_sit_msg',
  codigoMensagem: 'cod_msg',
  dataInclusao: 'dat_inc',
  dataMovimento: 'dat_mov',
  valorFinanceiro: 'vr_fin_tra',
  horaAbertura: 'hor_abe_efe',
  horaFechamento: 'hor_fec_efe',
  composicaoOperacao: 'dsc_res_com_ope',
  produto: 'dsc_prd_par',
  operacaoBancaria: 'dsc_ope_ban_par',
  sistema: 'dsc_sis_par',
  liquidacao: 'dsc_liq_par',
  sistemaOrigem: 'dsc_sis_ori',
  entidadeConveniada: 'dsc_etd_cnv',
  usuarioUltimaManuntencao: 'nom_usu',
  usuarioInclusao: 'nom_usu_inc',
  qtdAutorizacao: 'qtd_aut',
  dataReferencia: 'dat_ref_tra',
  prioridade: 'dsc_tip_prr',
  numeroUnicoOperacao: 'num_uni_ope',
  numeroControleMensagem: 'num_ctr_msg_ori',
  dominioSistema: 'id_dom_sis',
  tipoMensagem: 'id_tip_msg',
  tipoEntradaMensagem: 'id_tip_ent_msg',
  dataUltimoProcessamentoEmissor: 'dat_ult_pro_emi',
  numeroControleIF: 'num_ctr_if',
};

export { BoletagemConsulta, BoletagemConsultaSource };
