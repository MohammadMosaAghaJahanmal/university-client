import { useEffect, useState } from "react";


let globalState = {
    accreditations: [],
    accrs: [],
    administrativestaffs: [],
    offlineenrollmentrequirements: [],
    enrolled: [],
    generals: [],
    annualprofessionaldevelopmentplans: [],
    aaims: [],
    aannualprograms: [],
    achievements: [],
    academiccalendars: [],
    acapacitybuildings: [],
    achievements: [],
    acouncilscommittees: [],
    aggrements: [],
    amanualpolicies: [],
    selfassesments: [],
    periodicprogramreviews: [],
    avissionmissionimages: [],
    boardinfos: [],
    boardmembers: [],
    boardposts: [],
    capacitybuildings: [],
    cecurriculums: [],
    ceabouts: [],
    ceaggrements: [],
    curriculums: [],
    missions: [],
    ceorganizationalstructures: [],
    vissions: [],
    chancellormessages: [],
    contactinfos: [],
    contactus: [],
    eligibilitycriterias: [],
    faculties: [],
    heros: [],
    histories: [],
    jobs: [],
    libraries: [],
    labs: [],
    libraryinfos: [],
    magazines: [],
    migrationpolicies: [],
    news: [],
    foundation: [],
    orgstructures: [],
    pdcstructures: [],
    policiesandprocedures: [],
    pdcposts: [],
    pdcstaticks: [],
    pdc_aims: [],
    penalties: [],
    raims: [],
    researchpublications: [],
    researchsupports: [],
    researchtrainings: [],
    researchguides: [],
    researchpapers: [],
    planedresearches: [],
    underprocessresearches: [],
    completedresearches: [],
    publishedresearches: [],
    kankorguides: [],
    general: [],
    kankorregistrationdates: [],
    researchpapersandpublications: [],
    rmanualpolicies: [],
    scholarshipsfinancings: [],
    semesterpromotionrules: [],
    stratigicaims: [],
    scientificandresearchmagazines: [],
    seminarscoursesworkshops: [],
    teachers: [],
    structures: [],
    semesterfees: [],
    students: [],
    societies: [],
    pdcstudents: [],
    values: [],
    strategicplanes: [],
    councilsandcommittees: [],
    activities: [],
    academicprograms: [],
    onlinelibraries: [],
    offlinelibraries: [], 
    studystatistics: [], 
    procedures: [],
    progressiveplans: [],
    studentsengagements:[],
    studentsexperiences: [],
    toursofstudents: [],
    studentsstatistics: [],
    tajils : [],
    depriveds: [],
    chances: [],
    reenrollments: [],
    eresticates: [],
    transformations: [],
    repeats: [],
    graduates: [],
    graduatedstudentsstatistics: [],
    employedstudents: [],
    counselingcenters: [],
    alumni:[]
};
let actions = {};
let listeners = [];


const useStore = (shouldRender = true) =>
{
    const setState = useState(globalState)[1];

    const dispatch = (type, payload) =>
    {
        
        let newState = actions[type](payload, globalState);
        globalState = {...globalState, ...newState};
        listeners.forEach(listener => {
            listener(globalState)
        });
    }
    
    useEffect(() =>
    {
        if (shouldRender)
            listeners.push(setState);
        return () => {
            if (shouldRender)
                listeners = listeners.filter((listener) => listener !== setState);
        }

    }, [setState, shouldRender])
    
    return [globalState, dispatch];
}


export const initState = (action, initialState) =>
{
    if(initialState)
    {
        globalState = {...globalState, ...initialState};
    }
    actions = {...actions, ...action};
}




export default useStore;