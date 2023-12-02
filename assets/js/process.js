export function putData(target_url, datajson, responseFunction) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify(datajson);
  
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(target_url, requestOptions)
      .then(response => response.json())
      .then(result => responseFunction(result))
      .catch(error => console.log('error', error));
}

export function deleteData(target_url, responseFunction) {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch(target_url, requestOptions)
    .then(response => response.json())
    .then(result => responseFunction(result))
    .catch(error => console.log('Error:', error));
}

export function get(target_url,responseFunction){

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
  
    fetch(target_url, requestOptions)
    .then(response => {
      if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
      }
      return response.json();
    })
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}