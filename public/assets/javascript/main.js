$(document).ready(function () {

    //firebase stuff
    var firebaseConfig = {
        apiKey: "AIzaSyCfx7JuJ4eEZIpbbgNmvNPTOkPUDuIVyyo",
        authDomain: "dndcharcreator-2c7a2.firebaseapp.com",
        databaseURL: "https://dndcharcreator-2c7a2.firebaseio.com",
        projectId: "dndcharcreator-2c7a2",
        storageBucket: "dndcharcreator-2c7a2.appspot.com",
        messagingSenderId: "427842856156",
        appId: "1:427842856156:web:71475bda7a01b447"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();

    $(".return").on("click", mainPage);
    function mainPage() {
        window.location.href = "./index.html";
    }

    //when stuff is added or taken away from the system for the user:
    database.ref().on("value", function (snap) {
        console.log(snap.val());
        var path = snap.val().users.currentUser.uid;
        console.log(path);
    })
    //firebase authentication stuff:
    $("#sign-in").on("click", function (event) {
        event.preventDefault();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        console.log(email, password);
        if (!email || !password) {
            $("#sign-in-message").text("please input both email and password to sign in, or create one by registering an account.");
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                console.log(error, error.message);
                $("#sign-in-message").text(error.message);
            });
        }
    })

    $("#register").on("click", function (event) {
        event.preventDefault();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        console.log(email, password);
        if (!email || !password) {
            $("#sign-in-message").text("please input both email and password to sign in, or create one by registering an account.");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                $("#sign-in-message").text(error.message);
            });
        }
    })


    $(".sign-out").on("click", function () {
        firebase.auth().signOut();
    })

    var currentUser;

    //firebase on user login stuff
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            currentUser = user;
            console.log(currentUser);
            $("#welcome-banner").text("Welcome to the Character Creator, " + user.email + "!");
            $(".welcome").text("Welcome to the Dice Roller, " + user.email);
            $(".welcome-maker").text("Forge a new character, " + user.email);

            console.log(user, user.email);
            $("#sign-in-wrapper").css("display", "none");
            $("#app-wrapper").css("display", "block");
        } else {
            console.log("test");
            $("#sign-in-wrapper").css("display", "block");
            $("#app-wrapper").css("display", "none");
        }
    })









})

