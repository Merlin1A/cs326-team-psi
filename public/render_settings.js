function populateSettings() {
    const settings = document.getElementById('settings');
    settings.innerHTML = `
    <div class="col d-flex justify-content-center mb-2 centered">
        <div class="card border-dark card rounded-lg w-50 shadow text-center">
            <div class="card-body">
            <h5 class="card-title">Account settings</h5> <br>
            <form>
                <div class="form-group">
                <label>Update your email</label>
                <input class="form-control" id="new-email"
                aria-describedby="new-email" placeholder="New email"><br>
                <input class="form-control" id="confirm-email"
                aria-describedby="confirm-email" placeholder="Confirm email">
                </div>
                <button type="submit" class="btn btn-secondary">change email</button> 
                <br><br><br>
                <div class="form-group">
                    <label>"Update your password</label>
                <input class="form-control" id="new-password"
                aria-describedby="new-password" placeholder="New password"><br>
                <input class="form-control" id="confirm-password"
                aria-describedby="confirm-password" placeholder="Confirm password">
                </div>
                <button type="submit" class="btn btn-secondary">change password</button>
                <br><br>
                <hr>
                <button type="submit" class="btn btn-primary">confirm changes</button>
            </form>
            </div>
        </div>
    </div>
    `;
}
  
window.onload = populateSettings();