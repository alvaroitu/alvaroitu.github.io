import { Component, OnInit } from '@angular/core';

//import $ from "jquery";

@Component({
  selector: 'app-atuacao-profissional',
  templateUrl: './atuacao-profissional.component.html',
  styleUrls: ['./atuacao-profissional.component.scss']
})
export class AtuacaoProfissionalComponent implements OnInit {

  atividadesIBM = [
    '- Participação em treinamentos em diversas áreas de TI, com ênfase em DevSecOps.',
    '- Implantar aplicativos via processo automatizado.',
    '- Ansible/Ansible Tower.',
    '- Linux',
    '- Scrum',
    '- SQL Server',
    '- Mongo DB',
    '- Angular',
    '- Azure Monitoring'
        ]

        atividadesCEUNSP = [
      'Disciplinas Ministradas:',
      '- Engenharia de Software',
      '- Lógica Computacional',
      '- Programação para Dispositivos Móveis',
      '- Teoria dos Grafos'
    ]
  
  atividadesMktNow = [
    '- Reunir informações relevantes (dados dos clientes através de um sistema Google Analyticstc, por exemplo).',
    '- Limpeza de dados (identificação, correção de informações duplicadas, inválidas ou corrompidas).',
    '- Criar e desenvolver relatórios gerenciais.',
    '- Automatizar documentos para uso recorrente.',
    '- Montagem de relatórios, análise, apresentação de resultados.'
  ]

  atividadesDelogic = [
    '- Treinamentos em Java, Spring MVC, MySql, FreeMarker e Desenvolvimento web.', 
    '- Atividades em desenvolvimento web com back-end utilizando Java, Spring MVC e FreeMarker.',
    '- IDE utilizada: Eclipse.',
    '- Escritório e home office.',
    'OBS.: Contrato suspenso devido a Covid-19.'
  ]

  atividadesPASCOL = [
    '- Gerenciar a equipe de campo: tomando as decisões necessárias para garantir qualidade dos dados, o bom ambiente, bem-estar e segurança da equipe de campo.',
    '- Logística: Definição dos procedimentos de execução do trabalho, transporte da equipe, alojamento da equipe, transporte do material e peças de reposição para otimizar a produção aérea.', 
    '- Financeiro: fazer o controle de caixa com o coordenador de campo, pagamentos necessários e previsão de gastos com o setor financeiro da empresa.', 
    '- Atendimento aos clientes: estar à disposição para sanar dúvidas dos clientes via meios digitais ou reuniões pessoais, acompanhar visita ao campo com clientes, apresentar produtos finais aos clientes e dar suporte após entrega dos produtos.', 
    '- Controle de qualidade: Segundo controle de qualidade dos dados de campo verificando possíveis inconsistências e solicitando correção ao coordenador de campo.', 
    '- Processamento final: Pós-Processamento de dados Magnéticos, supervisão da equipe de escritório na preparação e entrega dos produtos finais para o cliente.'
  ]

  atividadesPASBR = [
    '- Gerenciar a equipe de campo: tomando as decisões necessárias para garantir qualidade dos dados, o bom ambiente, bem-estar e segurança da equipe de campo.', 
    '- Auxiliar na Logística para execução do trabalho, transporte da equipe, alojamento da equipe, transporte do material e peças de reposição para otimizar a produção aérea.', 
    '- Financeiro: fazer o controle de caixa com o coordenador de campo, pagamentos necessários e previsão de gastos com o setor financeiro da empresa.', 
    '- Atendimento aos clientes: estar à disposição para sanar dúvidas dos clientes via meios digitais ou reuniões pessoais, acompanhar visita ao campo com clientes, apresentar produtos finais aos clientes e dar suporte após entrega dos produtos.', 
    '- Controle de qualidade: Segundo controle de qualidade dos dados de campo verificando possíveis inconsistências e solicitando correção ao coordenador de campo.', 
    '- Processamento final: Pós-Processamento de dados Magnéticos, supervisão da equipe de escritório na preparação e entrega dos produtos finais para o cliente.',
    '- Elaboração/preparação de documentos para participação da empresa em licitações.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // voltarTopo(){
  //   $('html, body').animate({scrollTop:0}, 2000);
  // }

}
