<?php session_destroy();?>
<div id="myModal" class="logmodal">
        <br><br><br><br><br>

        <!-- Modal content -->
        <div class="modal-content">
            <div class="login-form">
                <form name="form" action="<?=BASE_URL?>api/login.api.php" method="POST">
                    <h1>Login</h1>
                    <?php
                        if (isset($_GET['invalid']) && $_GET['invalid'] == "true") {?>
                            <div class="alert alert-danger">Invalid Username or Password</div>
                        <?php } ?>
                    <div class="content">
                        <div class="input-field">
                            <input type="text" placeholder="name" required autocomplete="nope" name="user">
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="Password" required autocomplete="new-password" name="pass">
                        </div>
                    </div>
                    <div class="action">
						<button name="register" type="button" onclick="location.assign('<?=BASE_URL?>register')">Register</button>
                        <button name="submit" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
