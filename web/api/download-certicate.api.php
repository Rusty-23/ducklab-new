<?php
    $certificateFile = "certificate.pdf";

    if (file_exists($certificateFile)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($certificateFile).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($certificateFile));
        readfile($certificateFile);
        exit;
    } else {
        echo "Certificate file not found.";
    }
?>