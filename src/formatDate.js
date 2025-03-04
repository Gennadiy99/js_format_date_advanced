'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */

function formatDate(dateStr, fromForm, toForm) {

  let sepOld = fromForm[3];
  let sepNew = toForm[3];
  let arrDateOld = dateStr.split(sepOld);

  const dateFormObj = {};

  fromForm.slice(0, 3).forEach((component, index) => {
    dateFormObj[component] = arrDateOld[index];
  });

  let newFormArr = toForm.slice(0, 3).map(component => {

    let value = dateFormObj[component];

    if (value === undefined) {

      if (component === 'YY') {
        value = dateFormObj['YYYY'].slice(-2);
      }

      if (component === 'YYYY') {
        let year = dateFormObj['YY'];
        value = (parseInt(year) > 50 ? 19 : 20) + year;
      }
    }

    return value;
  }).join(sepNew);

  return newFormArr
}

// console.log(formatDate(date, fromFormat, toFormat));


module.exports = formatDate;




