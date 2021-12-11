function genHexString(len) {
  const hex = '0123456789ABCDEF';
  let output = '';
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
}

function formatProfessors(profarr) {
  let ans = '';
  let count = 0;
  profarr.forEach(function (prof) {
    if (count < 3) {
      ans += prof + ', ';
      ++count;
    }
  });
  return ans.slice(0, ans.length - 2);
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

function getCourseCode(course) {
  let colon_index = 0
  for (let i = 8; i < course.length; ++i) {
    if (course[i] === ':') {
      colon_index = i;
      break;
    }
  }
  return course.substring(8, colon_index);
}

function getCourseCodeReviews(course) {
  let underscore_index = 0
  for (let i = 0; i < course.length; ++i) {
    if (course[i] === '_') {
      underscore_index = i;
      break;
    }
  }
  return course.substring(0, underscore_index);
}

function setStorage(courseName) {
  window.localStorage.setItem('course', JSON.stringify(courseName));
  window.localStorage.setItem('coursecode', JSON.stringify(getCourseCode(courseName)));
}

function upVote(id) {
  const params = id.split('_');
  const button = document.getElementById(id);

  if (button.children[0].classList.contains('thumbs-up')) {
    postVote(params[0], params[1], params[2]);
    button.children[0].classList.remove('thumbs-up');
    button.children[0].classList.add('thumbs-up-clicked');
  }
  else {
    button.children[0].classList.remove('thumbs-up-clicked');
    button.children[0].classList.add('thumbs-up');
  }
}

function downVote(id) {
  const params = id.split('_');
  const button = document.getElementById(id);

  if (button.children[0].classList.contains('thumbs-down')) {
    postVote(params[0], params[1], params[2]);
    button.children[0].classList.remove('thumbs-down');
    button.children[0].classList.add('thumbs-down-clicked');
  }
  else {
    button.children[0].classList.remove('thumbs-down-clicked');
    button.children[0].classList.add('thumbs-down');
  }
}


function populateReviews(data, courseCode) {
  const reviews_id = document.getElementById(courseCode);
  reviews_id.innerHTML = '';
  if (data.length > 0) {

    data.forEach(function (review) {
      let rid = review['uid'];
      reviews_id.innerHTML += `<div class="card">
      <div class="card-header"></div>
      <div class="card-body">${review['comment']}
        <hr>
        <div class="row">
          <div class="col">
            <button onclick = "upVote(this.id)" type="button" class="icon" id=${String(courseCode) + '_' + String(rid) + '_up'} style="border:none; background:transparent; outline:none"><ion-icon name="thumbs-up-sharp" class="thumbs-up"></ion-icon></button>
            <div class="numberreviews pl-2"><p>${review['upvotes']} people liked this review</p></div>
          </div>
          <div class="col">
            <button onclick = "downVote(this.id)" type="button" class="icon" id=${String(courseCode) + '_' + String(rid) + '_down'} style="border:none; background:transparent; outline:none"><ion-icon name="thumbs-down-sharp" class="thumbs-down"></ion-icon></button>
            <div class="numberreviews pl-2"><p>${review['downvotes']} people disliked this review</p></div>
          </div>
        </div>
      </div>
    </div> 
    <br>`
    });
  }
}


function getCourseCriteria(criteriaArr) {
  let ans = ''
  criteriaArr.forEach(function (criteria) {
    if (criteria === "IE") {
      ans += '<span class="badge badge-warning">IE</span> ';
    }
    else if (criteria === "200+") {
      ans += '<span class="badge badge-success">200</span> ';
    }
    else if (criteria === "300+") {
      ans += '<span class="badge badge-danger">300</span> ';
    }
    else if (criteria === "400+") {
      ans += '<span class="badge badge-primary">400+</span> ';
    }
  });
  if(!criteriaArr.includes("200+") && !criteriaArr.includes("300+") && !criteriaArr.includes("400+")){
    ans += '<span class="badge badge-info">100</span> ';
  }
  return ans;
}

function populateCourses(courses) {
  const ranking = document.getElementById('ranking');
  ranking.innerHTML = '';
  let course_id = 1;
  courses.forEach(function (course) {
    ranking.innerHTML += `<div class="ranking">
            <div class="col d-flex justify-content-center mb-2">
              <div class="card rounded-lg w-100 shadow">
                <div class="card-body">
                  <div class="row">
                  <div class="col-4 card-main">
                  <h5 class="card-title course" id="course${course_id}">${course['course_name']} ${getCourseCriteria(course['course_criteria'])}</h5>
                  <p class="card-text">Taught by: ${formatProfessors(course['professors'])}</p>
                  <div class = "btn-toolbar card-main">
                    <div class = "badge">
                      <a onclick="getReviews(this.id.substring(0, 5))" class="btn btn-primary" id="${getCourseCode(course.course_name) + "_details"}" data-toggle="collapse" href="#${"collapse" + String(course_id)}" aria-expanded="false" aria-controls="${"collapse" + String(course_id)}">
                        Click to see more
                      </a>
                      <a onclick="setStorage('${course.course_name}')" class="btn btn-warning" id="rate${String(course_id)}" href="ratings.html">
                        Rate or review this class 
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-2 center-col">
                  <div class="badges-bar"> 
                    <h6>
                    Metrics based on <h4><span class="badge badge-warning">${course['number_ratings']} ratings</span></h4>
                    </h6>
                    <h6>
                    as well as <h4><span class="badge badge-warning">${course['number_reviews']} reviews</span></h4>
                    </h6>
                  </div>
                </div>
                <div class="col-2 center-col">
                  <div class="progress-circle">
                    <div class="progress mx-auto justify-content-end" data-value='${course['enjoyed_course']}'>
                      <span class="progress-left">
                        <span class="progress-bar ${getProgressColor(course['enjoyed_course'])}"></span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar ${getProgressColor(course['enjoyed_course'])}"></span>
                      </span>
                      <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div class="h3 font-weight-bold">${course['enjoyed_course']}%</div>
                      </div>
                    </div>
                    <p class="rating-cat">Enjoyed course</p>
                  </div>
                </div>
                <div class="col-2 center-col">
                  <div class="progress-circle">
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
                    <p class="rating-cat">Overall Difficulty</p>
                  </div>
                </div>
                <div class="col-2 center-col">
                  <div class="progress-circle">
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
                      <div class="card-body" id="${getCourseCode(course.course_name)}">
                      <div class="card-title"><h5>Reviews</h5></div>
                
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>`;
    course_id += 1;
  });
  $(function () {

    $(".progress").each(function () {

      let value = $(this).attr('data-value');
      let left = $(this).find('.progress-left .progress-bar');
      let right = $(this).find('.progress-right .progress-bar');

      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }

    })

    function percentageToDegrees(percentage) {

      return percentage / 100 * 360

    }

  });
}

// const websiteName = 'https://courseoverflow.herokuapp.com/';
const websiteName = 'http://localhost:3000/';

function getCourses() {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items.sort(function (a, b) {
      return b.overall_rating - a.overall_rating;
    })
    populateCourses(items);
  });
}

function getReviews(id) {
  $.getJSON(websiteName + 'course/reviews?coursecode=' + getCourseCodeReviews(id), function (data) { populateReviews(data, getCourseCodeReviews(id)); });
}

function postVote(course_code, rid, vote) {
  $.post(websiteName + "course/review/vote?vote=" + vote + "&rid=" + String(rid) + "&coursecode=" + course_code + "&randomdata=" + genHexString(8), function (data) {
    getReviews(course_code + "_");
  });
}

$.getJSON(websiteName + "courses", function (data) {
  $(document).ready(function (){
    let items = [];
    $.each(data, function(index, obj){
      items.push(obj.course_name);
    })
    $("#search-bar-text").autocomplete({
      source: items
    });
  });
});

document.getElementById("search-bar-button").addEventListener("click", () => {
  let key = document.getElementById("search-bar-text").value;
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function(obj){
      return obj.course_name === key;
    });
    populateCourses(items);
  })
});

document.getElementById("enjoyed-course").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items.sort(function (a, b) {
      return b.enjoyed_course - a.enjoyed_course;
    })
    populateCourses(items);
  });
});

document.getElementById("overall-difficulty").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items.sort(function (a, b) {
      return b.overall_difficulty - a.overall_difficulty;
    })
    populateCourses(items);
  });
});

document.getElementById("most-reviewed").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items.sort(function (a, b) {
      return b.number_reviews - a.number_reviews;
    })
    populateCourses(items);
  });
});

document.getElementById("most-rating").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items.sort(function (a, b) {
      return b.number_ratings - a.number_ratings;
    })
    populateCourses(items);
  });
});

document.getElementById("default-reset").addEventListener("click", getCourses);

document.getElementById("IE").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function (obj) {
      return obj.course_criteria.includes('IE');
    });
    populateCourses(items);
  });
});

document.getElementById("100-lvl").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function (obj) {
      return (!obj.course_criteria.includes('200+') && !obj.course_criteria.includes('300+') && !obj.course_criteria.includes('400+'));
    });
    populateCourses(items);
  });
});

document.getElementById("200-lvl").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function (obj) {
      return obj.course_criteria.includes('200+');
    });
    populateCourses(items);
  });
});

document.getElementById("300-lvl").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function (obj) {
      return obj.course_criteria.includes('300+');
    });
    populateCourses(items);
  });
});

document.getElementById("400-lvl").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function (obj) {
      return obj.course_criteria.includes('400+');
    });
    populateCourses(items);
  });
});

document.getElementById("400-lvl").addEventListener("click", () => {
  $.getJSON(websiteName + "courses", function (data) {
    let items = data;
    items = data.filter(function (obj) {
      return obj.course_criteria.includes('400+');
    });
    populateCourses(items);
  });
});

window.onload = getCourses();

