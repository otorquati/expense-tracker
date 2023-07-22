import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split('-');
  for (let i in list) {
    if ( list[i].date.getFullYear() === parseInt(year) && 
      (list[i].date.getMonth()+1) === parseInt(month)
      ) {
        newList.push(list[i]);
      }
  }
  return newList;
}