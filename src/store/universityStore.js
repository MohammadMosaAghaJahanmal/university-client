import {initState} from './store';

const universityStore = () =>
{

  const setUsers = (users, globalState) => ({users});

  const initialState = (payload, globalState) => ({
    aaccreditations: [],
    aaims: [],
    aannualprograms: [],
    academiccalendars: [],
    acapacitybuildings: [],
    achievements: [],
    acouncilscommittees: [],
    aggrements: [],
    amanualpolicies: [],
    aselfassesments: [],
    avissionmissionimages: [],
    boardinfos: [],
    boardmembers: [],
    boardposts: [],
    capacitybuildings: [],
    ccurriculums: [],
    ceabouts: [],
    ceaggrements: [],
    cemissions: [],
    ceorganizationalstructures: [],
    cevissions: [],
    chancellormessages: [],
    contactinfos: [],
    contactus: [],
    eligibilitycriterias: [],
    faculties: [],
    heros: [],
    histories: [],
    jobs: [],
    libraries: [],
    magazines: [],
    migrationpolicies: [],
    news: [],
    orgstructures: [],
    pdcposts: [],
    pdcstaticks: [],
    penalties: [],
    raims: [],
    researchpublications: [],
    rmanualpolicies: [],
    scholarshipsfinancings: [],
    semesterpromotionrules: [],
    stratigicaims: [],
    students: [],
    });
  
  return initState({
    initialState, 
    setUsers, 
  })
}


export default universityStore;