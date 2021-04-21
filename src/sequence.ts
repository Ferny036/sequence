interface data {
  value: number,
  index_i: number,
  index_j: number
}

const score = (query: string, subject: string, add: number, substract: number): data =>
  ssm(buildArray(query, subject, add, substract));


const ssm = (arr: Array<number>): data => {
  let datos: data = {
    value: 0,
    index_i: 0,
    index_j: 0
  }

  let sp: number = 0;
  let i: number = 0;

  for (let j = 0; j < arr.length; j++) {
    sp = sp + arr[j];
    if (sp > datos.value) {
      datos.value = sp;
      datos.index_i = i;
      datos.index_j = j;
    } else if (sp < 0) {
      sp = 0;
      i = j;
    }
  }

  return datos;
}

const buildArray = (query: string, subject: string, add: number, substract: number): Array<number> => {
  let compare: Array<number> = [];
  const max: number = query.length > subject.length ? query.length : subject.length;
  for (let i = 0; i < max; i++) {
    compare.push(query[i] && subject[i] ? (query[i] === subject[i] ? add : substract) : 0);
  }
  return compare;
}
export type { data };
export { score };