
// PŘIHLÁŠENÍ
/*
Vytvořte klasický přihlašovací formulář, do kterého uživatel zadá svůj e-mail a heslo a stránka ověří, zda má uživatel přístup do systému. Postupujte podle instrukcí níže.

Vytvořte stránku s formulářem, který bude mít jedno textové pole pro e-mail (typ email), jedno pole pro heslo (typ password) a tlačíto „Přihlásit“.
Na začátek souboru index.js vložte následující objekt představující jednoho uživatele. Budeme se tvářit, že jsme jej získali například z databáze.
Při kliknutí na tlačítko „Přihlásit“ ověřte, že uživatel zadal správné jméno a heslo. Pokud údaje souhlasí, nahraďte formulář na stránce nějakou zprávou, například „Přihlášený uživatel: Bartoloměj“.
Pokud uživatel zadal špatný e-mail nebo heslo, zobrazte ve formuláři výraznou zprávu „Neplatné přihlašovací údaje“. Zadaný e-mail nechte v políčku vyplněný. Vyplněné heslo naopak vymažte.
Všimněte si, že se snažíme dodržovat standardní praxi. Uživatel by neměl vědět, jestli zadal špatně heslo nebo e-mail. Nikdo by totiž neměl bý schopný zjistit, jestli v systému daný uživatel už existuje. Zároveň je dobré špatné heslo z políčka vymazat, aby jej mohl uživatel rovnou zkusit napsat znovu.
*/

const user = {
    email: 'cernohorska.lc@gmail.com',
    password: 'jesenice',
    name: 'Lenka'
}

let { email, password, name } = user

let inputEmail = document.querySelector('#email')
let inputPassword = document.querySelector('#password')
let formular = document.querySelector('#prihlaseni')

const check = (event) => {
    event.preventDefault()
    let valueEm = inputEmail.value
    let valuePwd = inputPassword.value
    if ((valueEm === user.email) && (valuePwd === user.password)) {
        formular.innerHTML = `<p>Uživatel ${user.name} je úspěšně přihlášen</p>`
    } else {
        let paragraph = document.querySelector('.paragraph')
        paragraph.classList.add('paragraph--display')
        inputPassword.value = ''
    }
}

formular.addEventListener('submit', (event) => check(event))



