import swal from "sweetalert";

const AskAlert = (props) =>
{
  return swal({
    dangerMode: true,
    title: props?.title || "Warning !",
    text: props?.text || "Are you sure to delete this part!?",
    icon: props?.icon || "warning",
    buttons: props?.buttons || {
      1: {text: "OK", value: true, className: 'warning'},
      2: {text: "Cancel", value: false, className: "cancel"},
    }
  })
}

export default AskAlert;