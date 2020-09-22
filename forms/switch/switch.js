name = prompt("Enter your name.")
state = prompt("Enter a state abberviation.")
temp = prompt("Enter the temperature.")
stateUp = state.toUpperCase()
respond = [`${capitalizeFirstLetter(name)}, you should wear a warm coat, hat, scarf and gloves if its ${temp} degrees in ${stateUp}.`, `${capitalizeFirstLetter(name)}, you should wear a warm coat but you won't need a hat, scarf or gloves if its ${temp} degrees in ${stateUp}.`, `${capitalizeFirstLetter(name)}, you should wear a less heavy coat if its ${temp} degrees in ${stateUp}.`, `${capitalizeFirstLetter(name)}, you should wear a light jacket and smile if its ${temp} degrees in ${stateUp}.`, `${capitalizeFirstLetter(name)}, wow is its really ${temp} degrees in ${stateUp}.`]

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

switch(true){
case (temp < 32):
    NSB.MsgBox(respond[0])
    break
case (32 <= temp && temp < 50 && stateUp == "NE"):
    NSB.MsgBox(respond[1])
    break
case (32 <= temp && temp < 50 && stateUp == "FL"):
    NSB.MsgBox(respond[2])
    break
case (50 <= temp && temp < 70 && stateUp == "FL"):
    NSB.MsgBox(respond[3])
    break
default:
    NSB.MsgBox(respond[4])
}