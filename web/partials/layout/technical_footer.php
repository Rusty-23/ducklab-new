<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

<script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>

<script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.151.3/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.151.3/examples/jsm/"
        }
    }
</script>
<script type="text/javascript" src="<?=BASE_URL?>assets/js/app.js"></script>
<?php if ($path == "course") {?><script type="text/javascript" src="<?=BASE_URL?>/assets/js/course.js"></script><?php }?>
<?php if ($path == "home") {?>
    <script type="module" src="<?=BASE_URL?>assets/js/three-canvas.js"></script>
    <script type="text/javascript" src="<?=BASE_URL?>assets/js/home.js"></script>
<?php }?>
<?php if ($path == "certificate") {?><script type="text/javascript" src="<?=BASE_URL?>/assets/js/certificate.js"></script><?php }?>
