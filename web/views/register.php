<div class="logmodal">
	<br><br><br><br><br>

	<!-- Modal content -->
	<div class="modal-content">
		<div class="login-form">
			<form name="form" action="<?=BASE_URL?>api/register.api.php" method="POST">
				<h1>Register</h1>
				<div class="content">
					<div class="input-field">
						<input type="text" placeholder="name" required autocomplete="nope" name="user">
					</div>
					<div class="input-field">
						<input type="password" placeholder="Password" required autocomplete="new-password" name="pass">
					</div>
					<a href="#" class="link">Forgot Your Password?</a>
				</div>
				<div class="action">
					<button name="submit" type="submit">Register</button>
				</div>
			</form>
		</div>
	</div>

</div>