"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Context_1 = require("./Context");
cucumber_1.setDefaultTimeout(300000);
const testCaseNames = [];
let testCaseRefs = [];
let testFolderRefs = [];
const jsonOutPut = [];
function getTestFolder(name, parent) {
    let testFolder = {};
    for (let i = 0; i < testFolderRefs.length; i++) {
        if (testFolderRefs[i]['Name'] === name && testFolderRefs[i]['Parent'] === parent) {
            testFolder = testFolderRefs[i];
            i = testFolderRefs.length;
        }
    }
    return testFolder;
}
// async function createFolders(): Promise<string> {
//     const folders: string[] = Context.featureName.split(/[\\/]/);
//     let testFolder: Object = { 'Ref': 'None'};
//     let i = 0;
//     let parent = testFolder['Ref'];
//     while (i< folders.length && Object.keys(testFolder).length>0) {
//         parent = testFolder['Ref'];
//         testFolder = getTestFolder(folders[i], testFolder['Ref']);
//         if(Object.keys(testFolder).length > 0) {
//             i++;
//             if (i === folders.length) {
//                 parent = testFolder['Ref'];
//             }
//         } else {
//             for(i; i< folders.length; i++){
//                 const tempParent = parent;
//             }
//             i=folders.length;
//         }
//     }
//     return parent;
// }
cucumber_1.Before((scenario) => {
    Context_1.Context.stepName = scenario.pickle.name;
    exports.testCaseID = scenario.pickle.name;
    console.log(scenario.pickle.name);
    const featureName = scenario.sourceLocation.uri.split(/features([\\/]*)+(.*).feature/)[2];
    //Context.featureName = featureName;
});
//# sourceMappingURL=hooks.js.map