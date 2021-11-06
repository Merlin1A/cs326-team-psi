function populateAccount() {
    const account = document.getElementById('create');
    account.innerHTML = 
    `<div id="create acc">
        <div class="col d-flex justify-content-center mb-2 centered">
            <div class="card border-dark card rounded-lg w-50 shadow text-center">
              <div class="card-body">
                <h5 class="card-title">Create your account</h5> <br>
                <form>
                  <div class="form-group">
                    <label for="email">Enter your email (must be a valid umass email)</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="name">Enter your name (first and last)</label>
                    <input type="name" class="form-control" id="name" placeholder="Name">
                  </div>
                  <div class="form-group">
                    <label for="username">Create an username</label>
                    <input type="username" class="form-control" id="username" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <label for="password">Create a password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <label for="retype-password">Confirm your password</label>
                    <input type="retype-password" class="form-control" id="retype-password" placeholder="Retype assword">
                  </div>
                  <button type="submit" class="btn btn-primary">Sign up</button>
                </form>
              </div>
            </div>
        </div>
    </div>`;
}
  
window.onload = populateAccount();