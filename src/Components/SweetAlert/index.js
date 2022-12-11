import swal from 'sweetalert';


const SweetAlert = (type, message) =>
{
    return swal(type.toUpperCase(), message.replace("Firebase: Error", ""), type)
} 

export default SweetAlert;