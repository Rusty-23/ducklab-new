-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 08, 2023 at 11:57 AM
-- Server version: 10.3.28-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aoguhafw_ducklab`
--

-- --------------------------------------------------------

--
-- Table structure for table `enrolled_subjects`
--

CREATE TABLE `enrolled_subjects` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `progress` int(11) NOT NULL DEFAULT 0,
  `completion_date` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enrolled_subjects`
--

INSERT INTO `enrolled_subjects` (`id`, `user_id`, `subject_id`, `progress`, `completion_date`) VALUES
(1, 1, 6, 5, NULL),
(2, 1, 1, 11, 'June 07, 2023'),
(3, 2, 1, 1, NULL),
(4, 2, 2, 1, NULL),
(5, 1, 3, 1, NULL),
(7, 1, 4, 1, NULL),
(8, 5, 1, 7, 'May 07, 2023'),
(9, 5, 2, 1, NULL),
(10, 5, 3, 1, NULL),
(11, 5, 4, 1, NULL),
(12, 5, 6, 2, NULL),
(14, 1, 2, 11, 'June 08, 2023');

-- --------------------------------------------------------

--
-- Table structure for table `lectures`
--

CREATE TABLE `lectures` (
  `id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `lecture_video_url` text NOT NULL,
  `title` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lectures`
--

INSERT INTO `lectures` (`id`, `subject_id`, `lecture_video_url`, `title`) VALUES
(1, 1, 'https://www.youtube.com/embed/MGo7AVXj_rU', 'Lecture 1'),
(2, 1, 'https://www.youtube.com/embed/223RMoWOzhI', 'Lecture 2'),
(3, 1, 'https://www.youtube.com/embed/nSrDR0jl4Bo', 'Lecture 3'),
(4, 1, 'https://www.youtube.com/embed/223RMoWOzhI', 'Lecture 4'),
(5, 1, 'https://www.youtube.com/embed/aQ_x_MR0Lr0', 'Lecture 5'),
(6, 1, 'https://www.youtube.com/embed/NGI1UQZuJ1g', 'Lecture 6'),
(7, 1, 'https://www.youtube.com/embed/nrGsKixKuaA', 'Lecture 7'),
(8, 1, 'https://www.youtube.com/embed/ajOFuzAhdsw', 'Lecture 8'),
(9, 1, 'https://www.youtube.com/embed/uvqW_vSs81o', 'Lecture 9'),
(10, 1, 'https://www.youtube.com/embed/NUNONDfMakM', 'Lecture 10'),
(11, 2, 'https://www.youtube.com/embed/CwdhP_zA3lg', 'Lecture 1'),
(12, 2, 'https://www.youtube.com/embed/zoZ8uzpDiBA', 'Lecture 2'),
(13, 2, 'https://www.youtube.com/embed/nlwXDmrF3Lg', 'Lecture 3'),
(14, 2, 'https://www.youtube.com/embed/RkOgR2gTD20', 'Lecture 4'),
(15, 2, 'https://www.youtube.com/embed/FcJnGlDRlP8', 'Lecture 5'),
(16, 2, 'https://www.youtube.com/embed/ptyqpfyB6oA', 'Lecture 6'),
(17, 2, 'https://www.youtube.com/embed/3uPkB0_OdiM', 'Lecture 7'),
(18, 2, 'https://www.youtube.com/embed/vr-OAZZZE_Y', 'Lecture 8'),
(19, 2, 'https://www.youtube.com/embed/ynHgzRZyOXE', 'Lecture 9'),
(20, 2, 'https://www.youtube.com/embed/eLgxaCtIkAc', 'Lecture 10'),
(21, 2, 'https://www.youtube.com/embed/D4ZEbQ6v2Zk', 'Lecture 11'),
(22, 3, 'https://www.youtube.com/embed/shP5aQG7Y8o', 'Lecture 1'),
(23, 3, 'https://www.youtube.com/embed/V-0jA5VXeTc', 'Lecture 2'),
(24, 3, 'https://www.youtube.com/embed/kSMaaqaCcjE', 'Lecture 3'),
(25, 3, 'https://www.youtube.com/embed/Vzx2DGC6X9g', 'Lecture 4'),
(26, 3, 'https://www.youtube.com/embed/3p4yyJ6-pDA', 'Lecture 5'),
(27, 3, 'https://www.youtube.com/embed/EdIVmsC1zUw', 'Lecture 6'),
(28, 3, 'https://www.youtube.com/embed/YLU6W6AYQto', 'Lecture 7'),
(29, 3, 'https://www.youtube.com/embed/WoHDVF2C7xk', 'Lecture 8'),
(30, 3, 'https://www.youtube.com/embed/4HRhPdsFWN8', 'Lecture 9'),
(31, 3, 'https://www.youtube.com/embed/D4txKdbK0L4', 'Lecture 10'),
(32, 3, 'https://www.youtube.com/embed/bfLZmDXQcUs', 'Lecture 11'),
(33, 4, 'https://www.youtube.com/embed/eE4GQTqcafE', 'Lecture 1'),
(34, 4, 'https://www.youtube.com/embed/a7tILgIo09I', 'Lecture 2'),
(35, 4, 'https://www.youtube.com/embed/jyau4L9lJnw', 'Lecture 3'),
(36, 4, 'https://www.youtube.com/embed/E0usBJGo5Nk', 'Lecture 4'),
(37, 4, 'https://www.youtube.com/embed/DKuW2aqqRAo', 'Lecture 5'),
(38, 4, 'https://www.youtube.com/embed/MXmHMMs-uXo', 'Lecture 6'),
(39, 4, 'https://www.youtube.com/embed/jg4ZJegyKco', 'Lecture 7'),
(40, 4, 'https://www.youtube.com/embed/ahu0Y6fRhDo', 'Lecture 8'),
(41, 4, 'https://www.youtube.com/embed/n50hBAdrJ7w', 'Lecture 9'),
(42, 4, 'https://www.youtube.com/embed/qpV_z83JZ8E', 'Lecture 10'),
(43, 4, 'https://www.youtube.com/embed/_PcI2SiLlu8', 'Lecture 11'),
(44, 4, 'https://www.youtube.com/embed/lUTjxWemGqk', 'Lecture 12'),
(45, 4, 'https://www.youtube.com/embed/N3QCBcDepnk', 'Lecture 13'),
(46, 4, 'https://www.youtube.com/embed/o8uxwf764qw', 'Lecture 14'),
(47, 4, 'https://www.youtube.com/embed/hWqIU1EHjM0', 'Lecture 15'),
(48, 4, 'https://www.youtube.com/embed/Tt6rEEp1mHk', 'Lecture 16'),
(49, 4, 'https://www.youtube.com/embed/Rx6DUnTFH-U', 'Lecture 17'),
(50, 4, 'https://www.youtube.com/embed/ONmfKdplWrs', 'Lecture 18'),
(51, 5, 'https://www.youtube.com/embed/z6b1A8aMBh4', 'Lecture 1'),
(52, 5, 'https://www.youtube.com/embed/g1i8rq8iQRY', 'Lecture 2'),
(53, 5, 'https://www.youtube.com/embed/8qvttdUAChA', 'Lecture 3'),
(54, 5, 'https://www.youtube.com/embed/8qvttdUAChA', 'Lecture 4'),
(55, 5, 'https://www.youtube.com/embed/aVenHh1rFtw', 'Lecture 5'),
(56, 5, 'https://www.youtube.com/embed/Ha7a7MfR0WM', 'Lecture 6'),
(57, 5, 'https://www.youtube.com/embed/NI1LVI_GW-w', 'Lecture 7'),
(58, 5, 'https://www.youtube.com/embed/SErFdGSDSKE', 'Lecture 8'),
(59, 5, 'https://www.youtube.com/embed/34vSPlf3GdA', 'Lecture 9'),
(60, 5, 'https://www.youtube.com/embed/2KrXCD9ryl4', 'Lecture 10'),
(61, 5, 'https://www.youtube.com/embed/D8c1lAytCpk', 'Lecture 11'),
(62, 5, 'https://www.youtube.com/embed/kasGQGGnuJM', 'Lecture 12'),
(63, 5, 'https://www.youtube.com/embed/GIPxI0-1Ntk', 'Lecture 13'),
(64, 5, 'https://www.youtube.com/embed/iQ-I3Unw82U', 'Lecture 14'),
(65, 6, 'https://www.youtube.com/embed/PApce5Q3U0k', 'Lecture 1'),
(66, 6, 'https://www.youtube.com/embed/hbUQlrLDAgw', 'Lecture 2'),
(67, 6, 'https://www.youtube.com/embed/vb-hDOm3GzU', 'Lecture 3'),
(68, 6, 'https://www.youtube.com/embed/hBQegTlFAQ4', 'Lecture 4'),
(69, 6, 'https://www.youtube.com/embed/ngQa3SlVCTE\r\n', 'Lecture 5'),
(70, 6, 'https://www.youtube.com/embed/Hilmxo_TWns', 'Lecture 6'),
(71, 6, 'https://www.youtube.com/embed/Uf56W2r53gs', 'Lecture 7'),
(72, 6, 'https://www.youtube.com/embed/Wt0RUEG7l_E', 'Lecture 8'),
(73, 6, 'https://www.youtube.com/embed/azo-Eo_I5Oo', 'Lecture 9'),
(74, 6, 'https://www.youtube.com/embed/S8yKqSIXGhs', 'Lecture 10'),
(75, 6, 'https://www.youtube.com/embed/KzCoYWM-CzE', 'Lecture 11'),
(76, 6, 'https://www.youtube.com/embed/wGpCqZgtBoI', 'Lecture 12'),
(77, 6, 'https://www.youtube.com/embed/wgvPDF8vefQ', 'Lecture 13');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(1, 'russel', 'admin'),
(2, 'new', 'added'),
(5, 'lowell', '1234567');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image_source` varchar(250) NOT NULL,
  `prof` varchar(50) NOT NULL,
  `preview_image` text NOT NULL,
  `duration` varchar(50) NOT NULL,
  `year_level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `slug`, `description`, `image_source`, `prof`, `preview_image`, `duration`, `year_level`) VALUES
(1, 'Human Computer Interaction', 'human-computer-interaction', 'Human-computer interaction (HCI) is a research field that studies and designs the interaction between people and computers. It is a multidisciplinary field that involves computer science, behavioral sciences, design, and other fields of study. HCI aims to make computer technology more user-friendly and more usable by considering various factors, such as user capabilities, preferences, experience, personality, cognitive abilities, motivation, and emotion. HCI also includes the implementation and evaluation of user interfaces for computer systems.', 'http://ducklabs.x10.mx/assets/img/hci.png', 'Prof.Micheal Noel Tolentino', 'http://ducklabs.x10.mx/assets/img/course1.jpg', '05 hours 15 minutes', '2nd'),
(2, 'Object Oriented Programming', 'object-oriented-programming', 'Object-oriented programming (OOP) is a programming paradigm that uses classes and objects to structure a software program. Classes are blueprints for creating objects, which are instances of classes. Objects have their own properties and behavior, which may contain data and code. OOP is used to implement real-world things in software development, such as inheritance, hiding, and polymorphism. OOP languages are usually class-based.', 'http://ducklabs.x10.mx/assets/img/oop.png', 'Prof.Dianna P. Suk', 'http://ducklabs.x10.mx/assets/img/course2.jpg', '05 hours 15 minutes', '2nd'),
(3, 'Physical Education 4 (Team Sports)', 'physical-education-4', 'Physical Education 4\'s goal is to inspire students to experiment with both indoor and outdoor physical activities. This course is crucial for students at all levels because it fosters social skills and serves as a reminder that learning can be more than just doing homework. Four sports\' histories will be covered in this course: basketball, volleyball, softball/baseball, and football. Learn the fundamental hand signals and movements for the four sports that are included: football, basketball, volleyball, and softball/baseball. You should also demonstrate how to play each sport.', 'http://ducklabs.x10.mx/assets/img/pef.png', 'Prof.John Paul Ludovice', 'http://ducklabs.x10.mx/assets/img/course3.jpg', '05 hours 15 minutes', '2nd'),
(4, 'Office Productivity 4 (AutoCad)', 'office-productivity-autocad', 'Office Productivity 3 Animation Course is a training program focused on enhancing animation skills within the context of office productivity tools. It is designed to teach individuals how to create dynamic and engaging presentations, documents, and spreadsheets using animation techniques. Participants can expect to gain practical skills in creating visually compelling animations to enhance their office productivity tasks, presentations, and documents.', 'http://ducklabs.x10.mx/assets/img/opa.png', 'Prof.Edmar Tan', 'http://ducklabs.x10.mx/assets/img/course4.jpg', '05 hours 15 minutes', '2nd'),
(5, 'Rizal\'s Life, Works And Writting', 'rizal-works-and-writing', 'The course Rizal\'s Life, Works, And Writing aims to give students a better knowledge of Rizal\'s contributions to Philippine history, culture, and the war for independence. Students will analyze Rizal\'s role as a reformist and his impact on national consciousness through a combination of lectures, readings, conversations, and multimedia tools.', 'http://localhost/xampploc/Llames/duck-labs/assets/img/rizal.png', 'Prof.Ivan Jorelle Opena', 'http://ducklabs.x10.mx/assets/img/course5.jpg', '05 hours 15 minutes', '2nd'),
(6, 'Math In The Modern World', 'math-in-the-modern-world', 'Mathematics in the modern world is a subject or discipline that deals with the nature, appreciation, and application of mathematics in different branches and aspects of life. Mathematics is a universal language that helps us understand our surroundings and solve problems. Mathematics is based on patterns and numbers that can be found in nature and the world. Some of the famous mathematicians who contributed to the development of mathematics in the modern world are Euler, Sir Isaac Newton, Carl Gauss, and Benoit Mandelbrot. Mathematics in the modern world covers topics such as the Fibonacci sequence, variables, sets, relations, functions, reasoning, statistics, and linear regression.', 'http://localhost/xampploc/Llames/duck-labs/assets/img/math.png', 'Prof. Nica Lamar Tan', 'http://ducklabs.x10.mx/assets/img/course6.jpg', '05 hours 15 minutes', '2nd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enrolled_subjects`
--
ALTER TABLE `enrolled_subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enrolled_subjects`
--
ALTER TABLE `enrolled_subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lectures`
--
ALTER TABLE `lectures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
