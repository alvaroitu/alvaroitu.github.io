import { Component, OnInit } from '@angular/core';

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
  
  atividadesMktNow = [
    '- Reunir informações relevantes (dados dos clientes através de um sistema Google Analyticstc, por exemplo).',
    '- Limpeza de dados (identificação, correção de informações duplicadas, inválidas ou corrompidas).',
    '- Criar e desenvolver relatórios gerenciais.',
    '- Automatizar documentos para uso recorrente.',
    '- Montagem de relatórios, análise, apresentação de resultados.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
