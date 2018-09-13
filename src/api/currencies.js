import jsonp from 'jsonp';
import Endpoints from '../constants';

const connectors = {
  getAllAdapter: date => (
    new Promise((resolve, reject) => {
      jsonp(
        `${Endpoints.BASE_URL}/${Endpoints.DAILY}/?${Endpoints.DATE}=${date}`,
        null,
        (err, response) => {
          if (err) {
            reject(err);
          }
          resolve(response);
        },
      );
    })
  ),
};

export default connectors;
