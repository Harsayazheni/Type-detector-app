# Type-detector-app
## Problem Statement
To detect the data type of the input given by the user.

## First Version
### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Type Detector App</title>
</head>
<body>
    <h1>Type Detector App</h1>
    <p id="output"></p>
    <script src="script.js"></script>
</body>
</html>
```
### script.js
```
let input=prompt("Enter your value to get the type");
function typedetector(input){
    if (input=="true"||input=="false")
    {
        return "Boolean";
    }
    else if(Number(input))
    {
        return "Number";
    }
    else{
        return "String";
    }
}
document.getElementById("output").innerHTML=typedetector(input);
```
<img width="1919" height="1079" alt="First Version of type detector app" src="https://github.com/user-attachments/assets/19b12d4e-24a5-4e5e-b5dd-b05885b86e4f" />

### Explanation

1. I have got the user input by using the prompt and retrieving it by document.getElementbyId and passing it into a typedetector function.
 
2. The typedetector function takes the input as a parameter and checks whether the input is a Boolean or a Number or a String and returns the value accordingly.

3. The output is shown in the screen using the id name.

### Output
<img width="1919" height="1079" alt="op1" src="https://github.com/user-attachments/assets/3d072c27-37c2-4862-b1db-e4d2ac16e3a4" />
<img width="1919" height="1079" alt="op2" src="https://github.com/user-attachments/assets/40c73cb4-a376-49a3-97b1-3e103950afea" />

### Possible Extensions
1.Rather than using prompt for getting user input,we can make it as a form and submit it to get the data type of the input.

2.There are 8 basic data types in javascript but we have mentioned only 3 here using if-else.

3.We have not used typeof().

4.Add some basic css.

## Second Version
### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Type Detector App</title>
</head>
<body>
    <h1>Type Detector App</h1>
    <p id="output"></p>
    <script src="script.js"></script>
</body>
</html>
```
### script.js
```
let input=prompt("Enter your value to get the type");
let typedetector=typeof input;
document.getElementById("output").innerHTML=typedetector;
```
### Explanation
1.Used typeof for detecting data type of the input.
#### Why not just use typeof on the prompt() input?
It always returns ```string```
#### What can we do instead?
We ```manually parse``` and check the data type of the input as done in the ```first version```.
### Output
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2c316515-8dfb-44bf-acf8-c400ca188cbc" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/e988dae9-35c1-4445-900f-934c27a52875" />



## Try it on live
https://harsayazheni.github.io/Type-detector-app/

