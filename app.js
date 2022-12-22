const gitHub = new GitHub;
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', function(e){
    const inputText = e.target.value;

    if(inputText !== ''){
        //Make HTTP call
        gitHub.getUser(inputText)
        .then(data => {
            if(data.message === 'Not Found'){
                //Show alert
                ui.showAlert('User Not Found', 'alert alert-danger')

            } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        });
    } else {
        //Clear Profile
        ui.clearProfile()
    }
});