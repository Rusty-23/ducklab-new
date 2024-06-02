<header>
    <a href="<?=BASE_URL?>" class="logo">
        <img src="<?=BASE_URL?>assets/img/logo.png">
    </a>

    <div class="header-icons">
        <li class="navbar"><a href="<?=BASE_URL?>">Back</a></li>
        <div class="dropdown" style="float:right;">
            <div class="header-icons">
			    <?php include "./partials/layout/icon.php" ?>
		    </div>
            <div class="dropdown-content">
                <a href="<?=BASE_URL?>api/logout.api.php"><b>Log out</b></a>
            </div>
        </div>

        <div class="bx bx-menu" id="menu-icon"></div>
    </div>
</header>