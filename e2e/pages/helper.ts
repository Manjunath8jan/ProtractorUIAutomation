import { WebElement } from "selenium-webdriver";
import { Context } from "../support/Context";
import * as fs from 'fs';

export class helperPage {
    private testData;

    getJsontestData(): any {
        if(!Context.featureName || !Context.stepName) {
            return '';
        }

        if(this.testData === null || this.testData === undefined) {
            let jsonData = '';
            const testDatajsonPath = `./e2e/testdata/${Context.featureName}.json`;
            jsonData = this.readJsonData(testDatajsonPath);
            if(jsonData === null || jsonData === undefined) {
                throw new Error(`There is no Json test data defined for feature '${Context.featureName}'. please check '${testDatajsonPath}'`);
            }

            for (let i =0; i< jsonData.length; i++){
                const key = Object.keys(jsonData[i]);
                if(key[0] === `${Context.stepName}`){
                    this.testData = jsonData[i][`${Context.stepName}`];
                    break;
                }
            }
            Object.freeze(this.testData);
            if(this.testData === null || this.testData === undefined) {
                throw new Error(`Test data for scenario '${Context.stepName}' was not defined`);
            }
        }
        return this.testData;
    }

    readJsonData(file){
        let jsonData;
        try {
            const data: any = fs.readFileSync(file);
            jsonData = JSON.parse(data);
        }
        catch (err) {
            console.log(file + 'failed to load. Reason: ', err.message);
        }
        return jsonData;
    }

}