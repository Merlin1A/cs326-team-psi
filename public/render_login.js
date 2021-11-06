function populateLogin() {
    const login = document.getElementById('login');
    login.innerHTML = 
        `<div class="col d-flex justify-content-center mb-2 centered">
        <div class="card border-dark card rounded-lg w-50 shadow text-center">
        <div class="card-body">
            <h5 class="card-title">Login</h5> <br>
            <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <a href="#" class="btn btn-primary">Sign-in</a>
            <a href="#" class="btn btn-primary">Create an account</a>
            </form>
        </div>
        </div>`;
}
  
window.onload = populateLogin();