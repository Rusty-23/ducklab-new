<?php include_once 'controller/home.controller.php';?>

<section class="home" id="home">
	<div class="home-text">
		<h6>PTC online learning platform</h6>
		<h1>Accessible Online Courses For All</h1>
		<p>Quack your way to success, fighting Ducks!</p>
	</div>

	<div class="home-img" id="home-img">

	</div>
</section>

<!---start container section---->
<section class="container">
	<div class="row">
		<div class="col-md-3 col-sm-6">
			<div class="card information">
				<div class="card-body">
					<div class="row">
						<div class="col-4 text-center">
							<img class="w-100" src="./assets/img/con1.svg">
						</div>
						<div class="col-8 information-content">
							<h4><b><?php echo $controller->totalRows; ?></b></h4>
							<p>Student Enrolled</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6">
			<div class="card information">
			<div class="card-body">
					<div class="row">
						<div class="col-4 text-center">
							<img class="w-100" src="./assets/img/con2.svg">
						</div>
						<div class="col-8 information-content">
							<h4><b><?php echo $controller-> totalCertifieds?></b></h4>
							<p>Certified</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-3 col-sm-6">
			<div class="card information">
				<div class="card-body">
					<div class="row">
						<div class="col-4 text-center">
							<img class="w-100" src="./assets/img/con3.svg">
						</div>
						<div class="col-8 information-content">
							<h4><b><?php echo $controller-> totalCourses?></b></h4>
							<p>Online Courses</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3 col-sm-6">
			<div class="card information">
				<div class="card-body">
					<div class="row">
						<div class="col-4 text-center">
							<img class="w-100" src="./assets/img/con4.svg">
						</div>
						<div class="col-8 information-content">
							<h4><b><?php echo $controller-> totalLectures?></b></h4>
							<p>Online Lectures</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!---start course section---->
<section class="courses" id="courses">
	<div class="center-text mb-5">
		<h5>COURSES</h5>
		<h2><b>Explore Your Preffered Courses</b></h2>
	</div>
	<div class="courses-content">
		<div class="row">
		<?php
$subjects = $controller->get_subjects();
$enrolled_subjects = $controller->get_enrolled_subjects();

for ($i = 0; $i < count($subjects); $i++) {
    $is_enrolled = false;
    for ($j = 0; $j < count($enrolled_subjects); $j++) {
        $enrolled_subject = $enrolled_subjects[$j]['subject_id'];
        if ($enrolled_subject == $subjects[$i]['id']) {
            $is_enrolled = true;
        }
    }
    ?>
			<div class="col-md-4 mb-5" style="background: transparent">
				<?php if ($is_enrolled) {?>
				<a class="card course-card h-100" href="<?=BASE_URL . "course/" . $subjects[$i]['slug'] . "#video-lectures"?>">
					<img class="card-img-top course-image" src="<?=$subjects[$i]['preview_image']?>">
					<div class="card-body courses-text">
						<h5><?=$subjects[$i]['year_level']?> Year Level</h5>
						<h3><?=$subjects[$i]['name']?></h3>
						<h6><?=$subjects[$i]['duration']?></h6>
					</div>
					<div class="card-footer text-center" style="color: black; border: none; overflow: hidden">
						<h6>Enrolled</h6>
					</div>
				</a>
				<?php } else {?>
				<div class="card course-card h-100">
					<img class="card-img-top course-image" src="<?=$subjects[$i]['preview_image']?>">
					<div class="card-body courses-text">
						<h5><?=$subjects[$i]['year_level']?> Year Level</h5>
						<h3><?=$subjects[$i]['name']?></h3>
						<h6><?=$subjects[$i]['duration']?></h6>
					</div>
					<div class="card-footer text-center" style="color: #fffff;">
						<button class="btn btn-link" onclick="handleEnrollClick(<?=$subjects[$i]['id']?>, '<?=$subjects[$i]['slug']?>')"><h6>Enroll Now</h6></btn>
					</div>
				</div>
				<?php }?>
			</div>
			<?php }?>
		</div>
	</div>
</section>

<!---start cta section---->
<section class="cta">
	<div class="center-text">
		<h5>Trusted By</h5>
		<h2><b>Local Departments And Colleges</b></h2>
	</div>

	<div class="cta-content">
		<div class="cta-img">
			<img src="./assets/img/cta1.png">
		</div>

		<div class="cta-img">
			<img src="./assets/img/cta2.png">
		</div>

		<div class="cta-img">
			<img src="./assets/img/cta3.png">
		</div>

		<div class="cta-img">
			<img src="./assets/img/cta4.png">
		</div>

		<div class="cta-img">
			<img src="./assets/img/cta5.png">
		</div>

		<div class="cta-img">
			<img src="./assets/img/cta6.png">
		</div>

	</div>
</section>

<!---start about section---->
<section class="about" id="about">
	<div class="about-img">
		<img src="./assets/img/about.png">
	</div>

	<div class="about-text">
		<h2><b>Want to know more about us?</b></h2>
		<p>"Learning never stops! Our platform offers a diverse range of courses and resources designed to cater to your
			unique learning needs and interests. Join us today and embark on a journey of growth, discovery, and
			transformation!"</p>
		<p><b>Check our portfolio by clicking the button below</b></p>
		<br>
		<!-- <h5>PTC's online learning platform</h5> -->
		<a href="https://drive.google.com/file/d/11C2Fb1uBq5X5mgx2JgNlGfUGrCDXdePW/view?usp=sharing" target="_blank"
			class="btn-custom">Read More</a>
	</div>
</section>