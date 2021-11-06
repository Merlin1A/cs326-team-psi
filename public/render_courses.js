function formatProfessors(profarr) {
  let ans = '';
  let count = 0;
  profarr.forEach(function (prof) {
    if (count < 3) {
      ans += prof + ', ';
      ++count;
    }
  });
  return ans.slice(0,ans.length-2);
}

function getProgressColor(progress) {
  if (progress >= 90) {
    return "border-primary";
  }
  else if (progress >= 80) {
    return "border-success";
  }
  else if (progress >= 60) {
    return "border-warning";
  }
  else {
    return "border-danger";
  }
}

function getCourseCriteria(criteriaArr) {
  let ans = ''
  criteriaArr.forEach(function(criteria) {
    if (criteria === "IE") {
      ans += '<span class="badge badge-warning">IE</span> ';
    }
    else if (criteria === "200+") {
      ans += '<span class="badge badge-success">200+</span> ';
    }
    else if (criteria === "300+") {
      ans += '<span class="badge badge-danger">300+</span> ';
    }
    else if (criteria === "400+") {
      ans += '<span class="badge badge-primary">400+</span> ';
    }
  });
  return ans;
}

function populateCourses(data) {
    if (data.hasOwnProperty('course_array')) {
        const ranking = document.getElementById('ranking');
        ranking.innerHTML = '';
        const courses = data['course_array'];
        let course_id = 1;
        courses.forEach(function(course) {
            ranking.innerHTML += `<div class="ranking">
      <div class="col d-flex justify-content-center mb-2">
          <div class="card rounded-lg w-75 shadow">
            <div class="card-body">
              <div class="row">
              <div class="col">
              <h5 class="card-title">${course['course_name']} ${getCourseCriteria(course['course_criteria'])}</h5>
              <p class="card-text">Taught by: ${formatProfessors(course['professors'])}</p>
              </div>
              <div class="col justify-content-end">
            <div class="progress mx-auto justify-content-end" data-value='${course['overall_rating']}'>
              <span class="progress-left">
                <span class="progress-bar ${getProgressColor(course['overall_rating'])}"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar ${getProgressColor(course['overall_rating'])}"></span>
              </span>
              <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div class="h3 font-weight-bold">${course['overall_rating']}%</div>
              </div>
            </div>
          </div>
            </div>
              <div class = "btn-toolbar justify-content-between">
                <div class = "badge">
                  <button type="button" class="btn btn-info">
                    Ratings <span class="badge badge-light">${course['number_ratings']}</span>
                    <span class="sr-only">unread messages</span>
                  </button>
                  <button type="button" class="btn btn-info">
                    Reviews <span class="badge badge-light">${course['number_reviews']}</span>
                    <span class="sr-only">unread messages</span>
                  </button>
                  <a class="btn btn-primary" data-toggle="collapse" href="#${"collapse" + String(course_id)}" aria-expanded="false" aria-controls="${"collapse" + String(course_id)}">
                    Click to see more
                  </a>
                  <a class="btn btn-warning" href="ratings.html">
                    Rate or review this class 
                  </a>
                </div>
              </div>
              <div id="${"collapse" + String(course_id)}" class="collapse">
                <div class="card-body">
                  <div class="card-header">Course Description</div>
                  ${course['course_description']}
                </div>
                <br><hr>
                <div class="card-body">
                  <div class="card-title"><h5>Ratings</h5></div>
                  <div class="row">
                    <div class="col">
                      <div class="progress mx-auto justify-content-end" data-value='${course['overall_rating']}'>
                        <span class="progress-left">
                          <span class="progress-bar ${getProgressColor(course['overall_rating'])}"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar ${getProgressColor(course['overall_rating'])}"></span>
                        </span>
                        <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                          <div class="h3 font-weight-bold">${course['overall_rating']}%</div>
                        </div>
                      </div>
                      <p class="rating-cat">Overall Rating</p>
                    </div>
                    <div class="col">
                      <div class="progress mx-auto justify-content-end" data-value='${course['overall_difficulty']}'>
                        <span class="progress-left">
                          <span class="progress-bar ${getProgressColor(course['overall_difficulty'])}"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar ${getProgressColor(course['overall_difficulty'])}"></span>
                        </span>
                        <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                          <div class="h3 font-weight-bold">${course['overall_difficulty']}%</div>
                        </div>
                      </div>
                      <p class="rating-cat">Difficulty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>`;
    course_id += 1;
        });
    }   
}
function getCourses() {
    $.getJSON('https://courseoverflow.herokuapp.com/courses', function(data) {populateCourses(data);});
}

window.onload = getCourses();
