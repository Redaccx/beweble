
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="signup_div">
        <h3>SignUp</h3>
        <input type="email" id="signup_email_field" placeholder="Enter Your Email Address ..." required />
        <input type="password" id="signup_pass_field" placeholder="Enter Your Password ..." required />
        <input type="text" id="signup_image_field" placeholder="Enter Your Profile photo URL" required />
        <input type="text" id="signup_uname_field" placeholder="Enter Your Profile User Name: "required />

        <button onclick="SignUpFunction()">Create Account</button>

        <h3>Already have Account ?</h3>
        <a href="signin">
            <button id="signup">Login</button>
        </a>

    </div>


<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>

<script src="init.js"></script>


<script src="signup.js"></script>
</body>
</html>
