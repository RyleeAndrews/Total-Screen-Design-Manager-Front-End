import superagent from 'superagent';
import cookie from 'react-cookies';



let API = `${__API_URL__}`;

export const categoryInitialize = () => dispatch => {

    superagent.get(API)
        .set('Authorization', 'Bearer ' + bearerToken())
        .then(res => dispatch(initAction(res.body)) )
        .catch(console.error);

}

export const profileCreate = payload => dispatch => {

  superagent.post(`${API}/postprofile`)
    .set('Authorization', 'Bearer ' + bearerToken())
    .send(payload)
    .then(res => dispatch(createAction(res.body)) )
    .catch(console.error);

};

export const updateProfile = payload => dispatch => {

    let URL = `${API}/${payload._id}`;
    console.log(payload);
    superagent.put(URL)
        .set('Authorization', 'Bearer ' + bearerToken())
        .send(payload)
        .then(res => dispatch(updateAction(res.body)) )
        .catch(console.error);

};


export const categoryDelete = payload => dispatch => {

  let URL = `${API}/${payload._id}`;

  superagent.delete(URL)
    .send(payload)
    .then(res => {
      console.log('!!!!', payload)
      dispatch(deleteAction(payload));
    })
    .catch(console.error);
};

const bearerToken = () => {
    return cookie.load('auth');
};

const initAction = list => ({
   type: 'INIT',
   payload: list
});

const createAction = profile => ({
    type: 'CREATE',
    payload: profile,
});

const updateAction = profile => ({
  type: 'UPDATE',
  payload: profile,
});

export const resetAction = () => ({
  type: 'RESET',
});
