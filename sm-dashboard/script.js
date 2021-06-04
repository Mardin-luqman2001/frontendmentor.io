
changeColor = () => {


    var currentTheme = document.documentElement.getAttribute('data-theme');
    console.log(currentTheme);

    var targetTheme = "light";
    var modeSwitchText = "Light"

    if (currentTheme === "light") {
        targetTheme = "dark";
        modeSwitchText = "Dark";
        console.log(targetTheme);
    }

    var modeSwitch = document.getElementById("mode-type");
    modeSwitch.innerText = modeSwitchText;

    document.documentElement.setAttribute('data-theme', targetTheme)

}