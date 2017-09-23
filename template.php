<html>
  <head>
    <title>NewsPush</title>
    <!-- Material Design Theming -->
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.orange-indigo.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>

    <link rel="stylesheet" href="style/main.css">

  </head>

  <body>
    <nav>
      <?php
        include 'navigationvisit.php'
      ?>
    </nav>
    <section id="content">
      <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">

        <!-- Container for the demo -->
        <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
          <div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
            <h2 class="mdl-card__title-text">title text here</h2>
          </div>
          <div class="mdl-card__supporting-text mdl-color-text--grey-600">
            <p>subtitle text here</p>

            <input class="mdl-textfield__input" style="display:inline;width:auto;" type="text" id="email" name="email" placeholder="Email"/>

            <button class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-up" name="signup">Sign Up</button>

            <button disabled class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-in" name="signin">Sign In</button>

            <button class="mdl-button mdl-js-button mdl-button--raised" disabled id="quickstart-verify-email" name="verify-email">Send Email Verification</button>


          </div>
        </div>

      </div>
    </section>
    <?php
      include 'footer.php'
    ?>

   </body>
</html>
