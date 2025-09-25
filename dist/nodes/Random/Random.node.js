"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
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
    }
    async execute() {
        const min = this.getNodeParameter('min', 0);
        const max = this.getNodeParameter('max', 1);
        if (!Number.isInteger(min) || !Number.isInteger(max)) {
            throw new Error('Os valores devem ser inteiros.');
        }
        if (max < min) {
            throw new Error('Valor máximo deve ser maior ou igual a mínimo.');
        }
        if (max == min) {
            throw new Error('Valor máximo deve ser diferente de valor mínimo.');
        }
        const response = await this.helpers.httpRequest({
            method: 'GET',
            url: 'https://www.random.org/integers/',
            qs: {
                num: 1,
                min,
                max,
                col: 1,
                base: 10,
                format: 'plain',
                rnd: 'new',
            },
            json: false,
        });
        const value = parseInt(response, 10);
        return [[{ json: { random: value } }]];
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.node.js.map