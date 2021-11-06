function populateRatings() {
    const rating = document.getElementById('ratings');
    rating.innerHTML = `
    <div class="container">
        <h3>Rate *insert course name*</h3> <br>
        <form>
            <div class="form-group">
                <h5>Would you take this course again?</h5>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="question-one" id="yes-ans" value="yes-ans">
                    <label class="form-check-label" for="yes-ans">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="question-one" id="maybe-ans" value="maybe-ans">
                    <label class="form-check-label" for="maybe-ans">Maybe</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="question-one" id="no-ans" value="no-ans">
                    <label class="form-check-label" for="no-ans">No</label>
                </div>
            </div>
            <div class="form-group">
                <h5>Did you enjoy the material for this course?</h5>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio"
                    name="question-two" id="yes-ans-1" value="yes-ans-1">
                    <label class="form-check-label" for="yes-ans-1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio"
                    name="question-two" id="maybe-ans-1" value="maybe-ans-1">
                    <label class="form-check-label" for="maybe-ans-1">Moderately</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio"
                                                    name="question-two"
                                                    id="no-ans-1"
                                                    value="no-ans-1">
                    <label class="form-check-label" for="no-ans-1">No</label>
                </div>
            </div>
            <div class="form-group">
                <h5>Did you find the resources helpful?</h5>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio"
                    name="question-three" id="yes-ans-2" value="yes-ans-2">
                    <label class="form-check-label" for="yes-ans-2">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio"
                    name="question-three" id="maybe-ans-2"
                    value="maybe-ans-2">
                    <label class="form-check-label" for="maybe-ans-2">Moderately</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio"
                                                    name="question-three"
                                                    id="no-ans-2"
                                                    value="no-ans-2">
                    <label class="form-check-label" for="no-ans-2">No</label>
                </div>
            </div>
            <div class="form-group">
                <h5>How much time did you spend per week on the course?</h5>
                <input type="number" name="weekly-hours" min=0 placeholder="hours per week" />
            </div>
        </form>
        <br> <hr> <br>
        <h3>Write a review for *insert course name*</h3> <br>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a review here" id="enter-review"></textarea>
        </div>
        <br> <br>
        <div class="form-floating">
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
        </div>
    </div>
    `;
}
  
window.onload = populateRatings();