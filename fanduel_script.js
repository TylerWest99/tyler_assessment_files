const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { Builder, By, Key, util } = require("selenium-webdriver");

async function main(){

    var email = "tyler2124@icloud.com";
    var password = "puckSlut69";

    let driver = await new Builder().forBrowser("chrome").build();
    //gvsu pw and username
    let gvUsername = "westty";
    let gvPw = "tylerw51Rebel5199";
    if(gvPw === "" && gvUsername === ""){
        let promise1 = new Promise((resolve) => {
            rl.question('What is your GV username ', name => { resolve(name) })
        })
        gvUsername = await promise1;
        let promise2 = new Promise((resolve) => {
            rl.question('What is your GV password ', pw => { resolve(pw) })
        })
        gvPw = await promise2;
    }

    let url = "https://mi.sportsbook.fanduel.com/sports"

    async function wait2s() {
        let p;
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve("Done"), 2000);
        });
        p = await promise;
    }

    await driver.get(url);

    let loginBox = await driver.findElement(By.css("#header-part > div.layout.top-container.align-center > div.flex.account-widget > div > div > button > div > span > span"));
    loginBox.click();

    await wait2s();

    let emailBox = await driver.findElement(By.css("#login-email"))
    let passwordBox = await driver.findElement(By.css("#login-password"))

    emailBox.sendKeys(email);
    passwordBox.sendKeys(password);

    await wait2s();

    let login = await driver.findElement(By.css("#root > div > main > div > section > div > form > button"));
    login.click();





}
main();