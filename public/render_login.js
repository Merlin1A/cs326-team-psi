function populateLogin() {
    const login = document.getElementById('login');
    login.innerHTML = `
        </div>
            <div class="col d-flex justify-content-center mb-2 centered">
            <div class="card border-dark card rounded-lg w-50 shadow text-center">
            <div class="card-body">
            <h5 class="card-title">Login</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Password" aria-label="Username">
            </div>
            <a href="#" class="btn btn-primary">Sign-in</a>
            <a href="#" class="btn btn-primary">Create an account</a>
            </div>
            </div>
        </div>
    `;
}
  
window.onload = populateLogin();