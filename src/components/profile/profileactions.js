import superagent from 'superagent';
import cookie from 'react-cookies';

export const updateUser = user => dispatch => {

  let token = cookie.load('auth');
  console.log('user',user);

  let URL =  `${__API_URL__}/auth/${user._id}`;

  superagent.put(URL)
    .set('Authorization', "Bearer " + token)
    .field('firstname', user.firstname)
    .then( res => {
      dispatch(updateUserAction(res.body));
      console.log(res);
    })
    .catch( error => {
      console.error(error.message);
    })
};

const updateUserAction = user => ({
  type: 'UPDATE_USER',
  payload: user,
});

export const deleteUser = user => dispatch => {
  let token = cookie.load('auth');

  let URL = `${__API_URL__}/auth/${user._id}`;

  superagent.delete(URL)
    .set('Authorization', 'Bearer ' + token)
    .then(() => dispatch(remove(user)))
    .catch(console.error);
};

const remove = user => ({
  type: 'DELETE_USER',
  payload: user,
})
