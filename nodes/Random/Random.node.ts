import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription
} from 'n8n-workflow';

//Implementa a interface INodeType
export class Random implements INodeType {
	// Descrição de node
	// renderiza a interface n8n
  description: INodeTypeDescription = {
    displayName: 'Random',
    name: 'random',
    icon: 'file:random-icon.svg',
    group: ['transform'],
    version: 1,
    description: 'True Random Number Generator using Random.org',
    defaults: {
      name: 'Random',
      color: '#00AAFF',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Valor Mínimo',
        name: 'min',
        type: 'number',
        default: 1,
        description: 'Digite o valor mínimo a gerar',
      },
      {
        displayName: 'Valor Máximo',
        name: 'max',
        type: 'number',
        default: 10,
        description: 'Digite o valor máximo a gerar',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    
		// Obtém os valores que o usuário digitou
		const min = this.getNodeParameter('min', 0) as number;
    const max = this.getNodeParameter('max', 1) as number;

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new Error('Os valores devem ser inteiros.');
    }
    if (max < min) {
      throw new Error('Valor máximo deve ser maior ou igual a mínimo.');
    }

		if (max == min) {
      throw new Error('Valor máximo deve ser diferente de valor mínimo.');
    }

    // Chamada à API do Random.org
    const response = await this.helpers.httpRequest({
      method: 'GET',
      url: 'https://www.random.org/integers/', //Endpoint
      qs: {
        num: 1,
        min,
        max,
        col: 1,
        base: 10,
        format: 'plain',
        rnd: 'new', // Sempre gera um novo número
      },
      json: false,
    });

// Converter a resposta em número inteiro
    const value = parseInt(response as string, 10);

	// Retorna o valor gerado 
    return [[{ json: { random: value } }]];
  }
}
