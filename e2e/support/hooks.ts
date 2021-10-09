import { After, AfterAll, Before, setDefaultTimeout, Status } from 'cucumber';
import { browser } from 'protractor';
import { isContext } from 'vm';
import { Context } from './Context'

setDefaultTimeout(300000);
const testCaseNames: string[] = [];
let testCaseRefs: object[] = [];
let testFolderRefs: object[] = [];
export let testCaseID: string;
const jsonOutPut: object[] = [];

function getTestFolder(name: string, parent: string): object {
    let testFolder = {};
    for (let i=0; i< testFolderRefs.length; i++){
        if(testFolderRefs[i]['Name'] === name && testFolderRefs[i]['Parent'] === parent) {
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

Before((scenario: any) => {
    Context.stepName = scenario.pickle.name;
    testCaseID = scenario.pickle.name;
    console.log(scenario.pickle.name);
    const featureName = scenario.sourceLocation.uri.split(/features([\\/]*)+(.*).feature/)[2];
    Context.featureName = featureName;

})