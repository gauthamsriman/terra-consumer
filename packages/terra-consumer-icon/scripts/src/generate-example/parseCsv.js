/* eslint-disable import/no-extraneous-dependencies */
import csv from 'csvtojson';
import _ from 'lodash';
import { IconPathDetails } from '../config';
/* eslint-enable import/no-extraneous-dependencies */

const csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];

const parseCsv = () => new Promise((resolve, reject) => {
  // Parse the csv file to json
  csv({ noheader: true, headers: csvHeaders }).fromFile(IconPathDetails.csvFile)
  .transf((jsonObj) => {
    // TODO: move transformation into it's own file
    /* eslint-disable  no-param-reassign */
    jsonObj.componentName = `Icon${_.upperFirst(_.camelCase(jsonObj.name))}`;
    jsonObj.filepath = `${IconPathDetails.iconDir}${jsonObj.componentName}.jsx`;
    jsonObj.themeable = !!jsonObj.themeable;
    jsonObj.bidi = (jsonObj.bidi === 'bi-directional');
    jsonObj.spinner = (jsonObj.name === 'IconSpinner');
    jsonObj.syntaxComponent = `<${jsonObj.componentName} height='2em' width='2em' />`;
    jsonObj.syntaxImport = `import ${jsonObj.componentName} from 'terra-consumer-icon/lib/icon/${jsonObj.componentName}';\n`;
    /* eslint-enable  no-param-reassign */
  })
  .on('end_parsed', (jsonObj) => {
    resolve(jsonObj);
  })
  .on('error', (error) => {
    reject(error);
  });
});

export default parseCsv;
