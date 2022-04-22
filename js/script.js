const user = document.getElementById("user");
const content = document.getElementById("content");
const url = "https://api.github.com/users/";

async function GetUser() {
  const response = await fetch(url + user.value);
  const data = await response.json();
  if (data.name) {
    content.innerHTML = `
        <img src="${data.avatar_url}" class="rounded-circle shadow w-25" alt="${data.name}'s avatar">
        <h1>[${data.type}] <a href="${data.html_url}" class="text-decoration-none" target="_blank">${data.name}</a></h1>
        <div class="card">
            <div class="card-body shadow">
                <h5 class="card-title">${data.location || "No Location"}</h5>
                <div class="row">
                    <div class="col-md-4 col-4"><span class="fw-bold">Followers</span> <br> ${data.followers}</div>
                    <div class="col-md-4 col-4"><span class="fw-bold">Following</span> <br> ${data.following}</div>
                    <div class="col-md-4 col-4"><span class="fw-bold">Repos</span> <br> ${data.public_repos}</div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-4"><span class="fw-bold">Company</span> <br> ${data.company || "No Provided"}</div>
                    <div class="col-md-4 col-4"><span class="fw-bold">Blog</span> <br> <a href="${data.blog || ""}" class="text-decoration-none" target="_blank">Here</a></div>
                    <div class="col-md-4 col-4"><span class="fw-bold">Twitter</span> <br> <a href="https://twitter.com/${data.twitter_username || ""}" class="text-decoration-none" target="_blank">${data.twitter_username || "No Provided"}</a></div>
                </div>
            </div>
        </div>
    `;
  } else {
    content.innerHTML = `
        <h1>User not found</h1>
    `;
  }
}

user.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    GetUser();
  }
});