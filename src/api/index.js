import { heroes } from "./db.json";

export const search = query => {
  const results = heroes.filter(hero => {
    let keep = false;

    Object.keys(hero).forEach(key => {
      const val = hero[key].toString();

      if (val.toLowerCase().includes(query.toLowerCase())) {
        keep = true;
      }
    });

    return keep;
  });

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(results);
    }, Math.ceil(Math.random() * 500));
  });
};
