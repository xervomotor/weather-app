// ParamGrid.js

import { getMainElement } from '../utils/utilities';
import { getParamGridData } from '../logic/weatherController';

export function createParamGrid(weatherData) {
    const main = getMainElement();
    if (!main) return;

    let paramGrid = document.getElementById('param-grid');
    if (!paramGrid) {
        paramGrid = document.createElement('div');
        paramGrid.id = 'param-grid';
        paramGrid.className = 'param-grid';
    } else {
        paramGrid.innerHTML = '';
    }

    const parameters = getParamGridData(weatherData);

    parameters.forEach((rowParams, rowIndex) => {
        const row = document.createElement('div');
        row.className = 'row';

        rowParams.forEach((param, paramIndex) => {
            const paramPair = document.createElement('div');
            paramPair.className = 'param-pair';

            const paramName = document.createElement('p');
            paramName.textContent = param.name;

            const paramValue = document.createElement('p');
            paramValue.id = `param-value-${rowIndex}-${paramIndex}`;
            paramValue.textContent = param.value;

            paramPair.appendChild(paramName);
            paramPair.appendChild(paramValue);
            row.appendChild(paramPair);
        });

        paramGrid.appendChild(row);
    });

    if (!paramGrid.parentElement) {
        main.insertAdjacentElement('afterend', paramGrid);
    }
}