<?php
	include_once 'conn.php';
    include 'models/subject.model.php';
    include 'models/login.model.php';
    include 'models/enrolled_subject.model.php';
    include 'models/lecture.model.php';

    class HomeController {
        private $subject;
        private $login;
        private $enrolled_subjects;
        public $lectures;

        public $totalRows;
        public $totalCourses;
        public $totalLectures;
        public $totalCertifieds;

        public function __construct($conn) {
            $this->subject = new SubjectModel($conn);
            $this->login = new LoginModel($conn);
            $this->enrolled_subjects = new EnrolledSubjectModel($conn);
            $this->lectures = new LectureModel($conn);

            $this->totalRows = $this->login->count();
            $this->totalCourses = $this->subject->count();
            $this->totalLectures = $this->lectures->count();
            $this->totalCertifieds = $this->enrolled_subjects->count("*", "completion_date IS NOT NULL");
        }

        public function get_subjects() {
            return $this->subject->get();
        }

        public function get_enrolled_subjects() {
            $user_id = $_SESSION['current_user']['id'];
            return $this->enrolled_subjects->get("*", "user_id = '$user_id'");
        }
    }

    $controller = new HomeController($conn);
