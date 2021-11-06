function populateNav() {
    const nav = document.getElementById('main_nav');
    nav.innerHTML = `
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-between">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active">
            <a class="nav-link" href="index.html">Course Overflow <span class="sr-only">(current)</span></a>
            </li>
        </ul>
        </div>
    </nav>
    `;
}
  
window.onload = populateNav();