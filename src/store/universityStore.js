import {initState} from './store';

const universityStore = () =>
{

  const setData = ({type, data}, globalState) => ({[type]: data});

  const initialState = (payload, globalState) => ({
    aaccreditations: [],
    aaims: [],
    pdc_aims: [],
    aannualprograms: [],
    achievements: [],
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
    curriculums: [],
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
    libraryinfos: [],
    labs: [],
    magazines: [],
    migrationpolicies: [],
    news: [],
    foundation: [],
    orgstructures: [],
    pdcstructures: [],
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
    values: [],
    strategicplanes: [],
    structures: [],
    semesterfees: [],
    councilsandcommittees: [],
    academicprograms: [],
    });
  
  return initState({
    initialState, 
    setData, 
  })
}


export default universityStore;