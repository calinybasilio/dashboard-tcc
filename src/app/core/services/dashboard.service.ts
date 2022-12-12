
import { Injectable } from '@angular/core';
import { users, words_frequency_bh } from 'app/mock/consts';
import { mapLocalitiesName } from '../consts';
import { ELocalities } from '../enums/localities.enum';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor() { }

    wordFrequencyPolarArea() {
        const datasetReturn = {
            labels: [],
            data: []
        };

        const words = words_frequency_bh.slice(0, 10).forEach((word: {
            count: number, word: string;
        }) => {
            datasetReturn.labels.push(word.word);
            datasetReturn.data.push(word.count);
        });

        debugger
        return datasetReturn;
    }

    numberJournalistsByLocationBar() {
        let countBh = 0;
        let countMv = 0;

        users.forEach(user => {
            if (user.locality_id == ELocalities.BELO_HORIZONTE) {
                countBh++;
            } else {
                countMv++;
            }
        });

        const retorno =  {
            labels: [],
            datasets: [
                {
                    label: mapLocalitiesName[ELocalities.BELO_HORIZONTE],
                    data: [countBh],
                    backgroundColor: 'blue'
                },
                {
                    label: mapLocalitiesName[ELocalities.MONTEVIDEO],
                    data: [countMv],
                    backgroundColor: 'limegreen'
                }
            ]
        };

console.log('retorno', retorno);
        return retorno;
    }

}
