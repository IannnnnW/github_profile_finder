class GitHub{
    constructor(){
        this.client_id = 'c1dd9fb4271b91d616fa',
        this.client_secret = 'b94ec3bf39f73f12f68e07de7a5ff4a4d22427df';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.clientId}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile:profile, 
            repos:repos
        }

        

    }



}