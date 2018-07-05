if (navigator.serviceWorker) {
    navigator.serviceWorker.register('js/sw.js')
    .then(registration => {
        console.log(`Registered!! || Scope:  ${registration.scope}`); //check for sw support and then register sw.js
    }).catch(error => {
        console.log(`Failed: , error: ${error}`);
    });
}
