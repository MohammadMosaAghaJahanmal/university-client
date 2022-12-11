import {initState} from './store';

const universityStore = () =>
{

  const setUsers = (users, globalState) => ({users});

  const initialState = (payload, globalState) => ({
      users: [],
    });
  
  return initState({
    initialState, 
    setUsers, 
  })
}


export default universityStore;