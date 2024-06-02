<div class="dropdown" style="float:right;">
  <button class="dropbtn"><i class='bx bx-user'></i><?=$_SESSION['current_user']['username']?></button>
  <div class="dropdown-content">
    <a href="<?=BASE_URL?>api/logout.api.php"><b>Log out</b></a>
  </div>
</div>