<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Brotherhood | My Brother’s Keeper</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    body {
      background: url('background.jpg') no-repeat center center fixed;
      background-size: cover;
      color: #fff;
      text-align: center;
      font-family: "Courier New", monospace;
    }

    nav {
      background: rgba(0, 0, 0, 0.8);
      padding: 10px 0;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    nav a {
      color: #00ff00;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;
      font-size: 1.2em;
    }

    nav a:hover {
      color: #fff;
      text-shadow: 0 0 8px #00ff00;
    }

    h1 {
      font-size: 3em;
      margin-top: 40px;
      text-shadow: 0 0 15px #00ff00;
    }

    .members {
      margin: 40px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    .member {
      background: rgba(0, 0, 0, 0.6);
      border: 2px solid #00ff00;
      border-radius: 10px;
      padding: 20px;
      width: 250px;
      box-shadow: 0 0 15px #00ff00;
      transition: transform 0.3s ease;
    }

    .member:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px #00ff00;
    }

    .member h3 {
      margin: 10px 0 5px;
      font-size: 1.6em;
      color: #00ff00;
      text-shadow: 0 0 8px #00ff00;
    }

    .member p {
      font-size: 1em;
      color: #fff;
    }

    footer {
      margin-top: 60px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.8);
      font-size: 1em;
      color: #00ff00;
    }
  </style>
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="brotherhood.html">Brotherhood</a>
    <a href="gallery.html">Gallery</a>
    <a href="about.html">About Us</a>
    <a href="admin.html">Admin</a>
    <a href="chat.html">Chat</a>
  </nav>

  <h1>Our Brotherhood</h1>
  <p>Bound by loyalty, forged through love, united by purpose.</p>

  <section class="members">
    <div class="member">
      <h3>Thirsty</h3>
      <p>Founder & Brother for life. The heart behind MBK.</p>
    </div>

    <div class="member">
      <h3>Buston Brandon</h3>
      <p>Brother in arms. Loyal, solid, true.</p>
    </div>

    <div class="member">
      <h3>Blue</h3>
      <p>Always got your six. Real one forever.</p>
    </div>

    <div class="member">
      <h3>Athena</h3>
      <p>Our guiding light — fierce and faithful.</p>
    </div>

    <div class="member">
      <h3>In Memory: Mama Tried</h3>
      <p>Forever in our hearts. This mission, this family, this site — for you, brother. Till Valhalla.</p>
    </div>
  </section>

  <footer>
    © 2025 MBK | BFFB
  </footer>
</body>
</html>
