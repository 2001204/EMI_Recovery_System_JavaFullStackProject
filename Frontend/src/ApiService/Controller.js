import axios from 'axios';


//for user registration
const BASE_URL = "http://localhost:5283/api/UserRegistration/register";

export async function registerUser(user){

    return axios.post(BASE_URL, user);

}

//for user login

const BASE_URL1 = "http://localhost:5283/api/UserLogin/login";

export async function loginUser(user){

    return axios.post(BASE_URL1, user);
}

//for resetting password

const BASE_URL2 = "http://localhost:5283/api/UserLogin/resetpass";

export async function resetPass(user){

    return axios.post(BASE_URL2, user);
}


//for doctor registration

const BASE_URL3 = "http://localhost:5283/api/UserRegistration/doctorreg";

export async function saveDoctor(doctor){

    return axios.post(BASE_URL3, doctor);
}

//for patient registration

const BASE_URL4 = "http://localhost:5283/api/UserRegistration/patientreg";

export async function savePatient(patient){

    return axios.post(BASE_URL4, patient);
}

//for UUID generation

const BASE_URL5 = "http://localhost:5283/api/UserLogin/genkey";

export async function getUUID(id){

    return axios.get(BASE_URL5, {params:{id}});
}

// for getting all users from database

const BASE_URL6 = "http://localhost:5283/api/Admin/getallusers";

export async function getUsers(){

    return axios.get(BASE_URL6);
}

// to save medical entry

const BASE_URL7 = "http://localhost:5283/api/MedicalRecord/saverecord";

export async function saveEntry(entry){

    return axios.post(BASE_URL7, entry);
}

// to update doctor profile

const BASE_URL8 = "http://localhost:5283/api/UpdateProfile/updatedoc";

export async function updateDoc(doctor){

    return axios.post(BASE_URL8, doctor);
}


// to update patient profile

const BASE_URL9 = "http://localhost:5283/api/UpdateProfile/updatepat";

export async function updatePatient(patient){

    return axios.post(BASE_URL9, patient);
}

// to get all medical history

const BASE_URL10 = "http://localhost:5283/api/MedicalRecord/getmedhis";

export async function getMedHistory(id){

    return axios.get(BASE_URL10, {params:{id}});
}

// logging out ..deleting UUID

const BASE_URL11 = "http://localhost:5283/api/UserLogin/deluuid";

export async function delUUID(id){

    return axios.get(BASE_URL11, {params:{id}});
}

// to get profile data 

const BASE_URL12 = "http://localhost:5283/api/Profile/patpro";

export async function getData(id){

    return axios.get(BASE_URL12, {params:{id}});
}

// to get medical history by id

const BASE_URL13 = "http://localhost:5283/api/MedicalRecord/byid";

export async function getMedhisById(id){

    return axios.get(BASE_URL13, {params:{id}});
}

// to verify uuid for add entry

const BASE_URL14 = "http://localhost:5283/api/MedicalRecord/verifyid";

export async function verifyUUID(id){

    return axios.get(BASE_URL14, {params:{id}});
}

// to get all doctors

const BASE_URL15 = "http://localhost:5283/api/Admin/getalldoctors";

export async function getDoctors(){

    return axios.get(BASE_URL15);
}

// to get doctors for verification

const BASE_URL16 = "http://localhost:5283/api/Admin/getnewdoctors";

export async function getNewDoctors(){

    return axios.get(BASE_URL16);
}

// to change staus ...verify doctor

const BASE_URL17 = "http://localhost:5283/api/Admin/verifystatus";

export async function changeStatus(id){

    return axios.get(BASE_URL17, {params:{id}});
}

// to get doctor profile

const BASE_URL18 = "http://localhost:5283/api/Profile/docpro";

export async function getDoctorPro(id){

    return axios.get(BASE_URL18, {params:{id}});
}

// to get profile pic

const BASE_URL19 = "http://localhost:5283/api/Profile/getimage";

export async function getPic(id){

    return axios.get(BASE_URL19, {params:{id}});
}


// to get disease by id 

const BASE_URL21 = "http://localhost:5283/api/Analysis/diseasebyid";

export async function getDisease(id){

    return axios.get(BASE_URL21, {params:{id}});
}


// to get expense by id

const BASE_URL20 = "http://localhost:5283/api/Analysis/expensebyid";

export async function getExpense(id){

    return axios.get(BASE_URL20, {params:{id}});
}

// to verify email

const BASE_URL22 = "http://localhost:5283/api/Email/send";

export async function verifyEmail(email){
    
    return axios.get(BASE_URL22, {params:{email}});
}

// to send uuid from patient to doctor

const BASE_URL23 = "http://localhost:5283/api/Uuid/save";

export async function sendToDoctor(str){
    return axios.get(BASE_URL23, {params:{str}});
}

// to get uuid of patient from patient table

const BASE_URL24 = "http://localhost:5283/api/Uuid/getuuid";

export async function getUUIDOfPatient(id){
    
    return axios.get(BASE_URL24, {params:{id}});
}


// to get uuid from doctor table.

const BASE_URL25 = "http://localhost:5283/api/Uuid/getId";

export async function getUuidForDoctor(id){
    
    return axios.get(BASE_URL25, {params:{id}});
}

// verify uuid for doctor insights

const BASE_URL26 = "http://localhost:5283/api/Uuid/verifyuid";

export async function verifyUID(id){

    return axios.get(BASE_URL26, {params:{id}});
}
