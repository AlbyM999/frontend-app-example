import axios from 'axios';

//vul hier de route naar de api group in

const baseURL = 'http://127.0.0.1:8000/api/user';

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
      .then((response) => {
        console.table(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getOnId(ID) {
    return axios
      .get(`${baseURL}/${ID}`)
      .then((response) => {
        console.table(response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  delete(ID) {
    return axios
      .delete(`${baseURL}/${ID}`)
      .then(
        (response)=>{
          console.log(response);
          return response;
        }
      )
      .catch((error) => console.error(error));
  }
}

export default new UserCrud();
