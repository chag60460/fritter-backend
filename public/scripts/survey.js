function createSurvey(fields) {
    fetch('/api/survey', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function fetchSurvey(fields) {
    console.log("check fetchSurvey js helper method")
    fetch('/api/survey', {method: 'GET', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}