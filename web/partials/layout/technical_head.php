<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php if (isset($_SESSION['current_user'])) { ?><meta name="AUTH-ID" content="<?=$_SESSION['current_user']['id']?>"><?php } ?>
<meta name="BASE-URL" content="<?=BASE_URL?>">
<meta name="API-URL" content="<?=API_URL?>">

<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

<!---custom css link---->
<link rel="stylesheet" type="text/css" href="<?=BASE_URL?>/assets/css/app.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>