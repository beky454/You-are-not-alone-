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
