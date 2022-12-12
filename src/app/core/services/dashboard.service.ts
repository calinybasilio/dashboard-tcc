
import { Injectable } from '@angular/core';
import { words_frequency_bh } from 'app/mock/consts';


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

}
