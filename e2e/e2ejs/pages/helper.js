"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context_1 = require("../support/Context");
const fs = require("fs");
class helperPage {
    getJsontestData() {
        if (!Context_1.Context.featureName || !Context_1.Context.stepName) {
            return '';
        }
        if (this.testData === null || this.testData === undefined) {
            let jsonData = '';
            const testDatajsonPath = `./e2e/testdata/${Context_1.Context.featureName}.json`;
            jsonData = this.readJsonData(testDatajsonPath);
            if (jsonData === null || jsonData === undefined) {
                throw new Error(`There is no Json test data defined for feature '${Context_1.Context.featureName}'. please check '${testDatajsonPath}'`);
            }
            for (let i = 0; i < jsonData.length; i++) {
                const key = Object.keys(jsonData[i]);
                if (key[0] === `${Context_1.Context.stepName}`) {
                    this.testData = jsonData[i][`${Context_1.Context.stepName}`];
                    break;
                }
            }
            Object.freeze(this.testData);
            if (this.testData === null || this.testData === undefined) {
                throw new Error(`Test data for scenario '${Context_1.Context.stepName}' was not defined`);
            }
        }
        return this.testData;
    }
    readJsonData(file) {
        let jsonData;
        try {
            const data = fs.readFileSync(file);
            jsonData = JSON.parse(data);
        }
        catch (err) {
            console.log(file + 'failed to load. Reason: ', err.message);
        }
        return jsonData;
    }
}
exports.helperPage = helperPage;
//# sourceMappingURL=helper.js.map