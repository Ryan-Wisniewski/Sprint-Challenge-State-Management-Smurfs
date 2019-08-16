import axios from 'axios'

//api url: http://localhost:3333

export const getData = () => {
    console.log('dataInvoked')
  return dispatch => {
    dispatch({ type: 'FETCH_API_DATA_START' });
    // console.log('dispatchFETCH_API_DATA_START')
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('res',res)
        dispatch({ type: 'FETCH_API_DATA_SUCCESS', payload: res.data });
      })
      .catch(err => {
          console.log('you broken the api',err)
        dispatch({ type: 'FETCH_API_DATA_FAILURE', payload: err.response });
      });
  };
};

export const addMember = smurf => {
    console.log('SMURFADDED', smurf)
    return dispatch =>{
        dispatch({ type: 'ADD_MEMBER_START', payload: smurf })
        axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res)
            dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: res.data })
        })
        .catch(err => {
            console.log('you broken the api',err)
          dispatch({ type: 'ADD_MEMBER_FAILURE', payload: err.response })
        })
    }
  }