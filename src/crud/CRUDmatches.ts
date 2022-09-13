import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/match';

class UserCrud {
  create(payload) {
    return axios
      .post(baseURL, payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  update(ID, payload) {
    return axios
      .put(`${baseURL}/${ID}`, payload)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  get() {
    return axios
      .get(baseURL)
      .then((response: any) => {
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getOnId(ID: any) {
    return axios
      .get(`${baseURL}/tournament/${ID}`)
      .then((response: any) => {
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  delete(ID: string) {
    return axios
      .delete(`${baseURL}/${ID}`)
      .then()
      .catch((error) => console.error(error));
  }
}

export default new tournamentCRUD();
