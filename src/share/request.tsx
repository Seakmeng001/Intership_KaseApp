import axios from "axios";

const base_url = "https://kaseapp1dev.kasegro.com/api/r1/"

export const request =(url="", method="get", data={}) => {
  var header ={'Content-Type': 'application/json'}
  if(data instanceof FormData){
      header = { 'Content-Type': 'multipart/form-data'}
  }
  return axios({
    url: base_url+ url,
    method: method,
    data: data
  

  }).then(res=>{
    return res.data;
  }).catch(error=>{
    console.log(error)
    var response= error.response
    if(response.status== 500){
        var message_form_server= response.data.message;
        alert(message_form_server)
    }
    return false

  }).finally(() => {

  })

}