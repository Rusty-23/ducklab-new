<?php
	include_once 'conn.php';
    include 'models/subject.model.php';
    include 'models/enrolled_subject.model.php';


    class CertificateController {
        private $subject;
        private $enrolled_subjects;

        public function __construct($conn) {
            $this->subject = new SubjectModel($conn);
            $this->enrolled_subjects = new EnrolledSubjectModel($conn);
        }

        public function get_subject($id) {
            return $this->subject->get_one("*", "id=$id");
        }

        public function get_enrolled_subject($subject_id) {
            $user_id = $_SESSION['current_user']['id'];
            return $this->enrolled_subjects->get_one("*", "user_id = $user_id AND subject_id = $subject_id");
        }
    }

    $controller = new CertificateController($conn);
