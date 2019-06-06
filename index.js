function submitData(name, email){
  let formData = {
        name,
        email };
  let configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"},
    body: JSON.stringify(formData)};
return fetch ("http://localhost:3000/users", configObject)
  .then(function(response){
    return response.json();})
  .then(function(object){
    document.body.innerHTML = object[ "id" ]})
  .catch(function(error){
    alert("Unauthorized Access")
    document.body.innerHTML = error.message;
  });
}
