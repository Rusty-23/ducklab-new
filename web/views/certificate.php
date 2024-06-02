<?php 
    include_once 'controller/certificate.controller.php';

    $current_user = $_SESSION['current_user'];

    if (isset($_GET['subject_id'])) {
        $subject_id = $_GET['subject_id'];
        $enrolled_subject = $controller->get_enrolled_subject($subject_id);
        $subject = $controller->get_subject($enrolled_subject['subject_id']);
?>
<style>
    
</style>
<link rel="stylesheet" type="text/css" href="<?=BASE_URL?>assets/css/certificate.css">
<div class="certificate" id="certificate">
    <div class="certificate-inner">
        <img class="certificate-image" src="./assets/img/name.png" alt="Certificate Image">
        <span class="certificate-title">Certificate of Completion</span><br>
        <span class="certificate-subtitle"><i>This is to certify that</i></span>
        
        <span class="certificate-name"><b>
            <?=strtoupper($current_user['username'])?>
            </b></span>
        <span class="certificate-subtitle" style="margin-top: 10px;"><i>has completed the course</i></span><br />
        <span class="certificate-name"><?=strtoupper($subject['name'])?></span><br />
        <span class="certificate-subtitle">This certificate is awarded to <b>
                <?=strtoupper($current_user['username'])?>
            </b><I> for <br> completing the <?=$subject['name']?>.
                <br>This certificate is awarded on </I>
            <?=$enrolled_subject['completion_date']?>
        </span> <br /><br /><br /><br />


    </div>
    <button class="download-button" onclick="printCertificate()">Download Certificate</button>
</div>
<?php } ?>