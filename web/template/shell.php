<!DOCTYPE html>
<html>
<head>
    <?php include_once BASE_PATH . "partials/layout/technical_head.php";?>
    <title><?php echo $title; ?></title>
</head>
<body>
    <?php
        include BASE_PATH . $view;
        include_once BASE_PATH . "partials/layout/technical_footer.php";?>
</body>
</html>