function convertDate(p) {
  const us = p.split('-');
  const year = us[0];
  const day = us[2];
  const month = us[1];
  return `${day}/${month}/${year}`;
}

export default convertDate;
