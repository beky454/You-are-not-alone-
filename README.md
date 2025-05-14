<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>You Are Not Alone</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Welcome to You Are Not Alone</h1>
    </header>
    <main>
      <section>
        <h2>About Us</h2>
        <p>Here, you'll find resources, stories, and more to help with mental health!</p>
      </section>
      <!-- You can add more content as needed -->
    </main>
    <footer>
      <p>Contact us for help and support!</p>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
body {
    display: flex;
    margin: 0;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background: #fefbd8;
}

#sidebar {
    width: 25%;
    background-color: #ffd6d6;
    padding: 20px;
    height: 100vh;
    overflow-y: auto;
}

#main {
    width: 75%;
    padding: 20px;
    background-color: #e0f7fa;
}

#mascot img {
    width: 100px;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0% { transform: translatey(0px); }
    50% { transform: translatey(-10px); }
    100% { transform: translatey(0px); }
}

button {
    background-color: #b2fab4;
    border: none;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

textarea {
    width: 100%;
    height: 60px;
    margin-top: 10px;
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>You Are Not Alone</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div id="sidebar">
        <h2>Helpful Resources</h2>
        <ul>
            <li><strong>Support Books:</strong><br> - "When Sophie Gets Angry"<br> - "A Terrible Thing Happened"</li>
            <li><strong>Find Help:</strong><br><a href="#">Find a Counselor or Therapist</a></li>
            <li><strong>Leave a Support Message:</strong><br><textarea placeholder="Write your support..."></textarea></li>
            <li><strong>APA 7th Citations:</strong><br>
                Serrano-Ibanez, E. R., et al. (2018).<br>
                Wildes, J. E., et al. (2010).<br>
                Mian, N. D., et al. (2025).<br>
                Kraft, L., et al. (2023).
            </li>
        </ul>
    </div>

    <div id="main">
        <h1>Welcome to "You Are Not Alone"</h1>
        <p>This is a safe and colorful space where kids can learn about their feelings and get help if they need it!</p>
        
        <div id="mascot">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Blue_butterfly_icon.svg" alt="Butterfly Mascot" />
            <p>Hi there! I'm Flutter the Butterfly. How are you feeling today?</p>
        </div>

        <div id="survey">
            <h2>How Are You Feeling?</h2>
            <p>Select your mood today:</p>
            <button>1 - Feeling Bad</button>
            <button>5 - Okay</button>
            <button>10 - Feeling Great</button>
        </div>

        <div id="anxiety-scale">
            <h2>Anxiety Scale</h2>
            <p>How often have you felt nervous or worried?</p>
            <label><input type="radio" name="anxiety" /> 0 - Not true at all</label><br/>
            <label><input type="radio" name="anxiety" /> 1 - A little true</label><br/>
            <label><input type="radio" name="anxiety" /> 2 - Sometimes true</label><br/>
            <label><input type="radio" name="anxiety" /> 3 - Often true</label><br/>
            <label><input type="radio" name="anxiety" /> 4 - Very often true</label>
        </div>

        <div id="quote-box">
            <h2>Daily Quote</h2>
            <p>"You are enough."</p>
            <button>Get New Quote</button>
        </div>

        <div id="rewards">
            <h2>Reward Panel</h2>
            <p>Come back daily to collect stars and feel proud of your mental health journey!</p>
        </div>

        <div id="donate">
            <h2>Support Kids' Mental Health</h2>
            <button>Donate Now</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
