<html>
<head><title>Test Page</title></head>
<body>
<h1>Html form</h1>
<?php 
$data = array(
			'section'=>array(
				'section1'=>array(
					'title'=>'section one',
					'subsection'=>array(
						'subsection1'=>array(
							'title'=>'sub section one',
							 'fields'=>array(
								'field1'=>array(
									'title'=>'fields one',
									'type'=>'text',
									'name'=>'name1',
								),
								'field2'=>array(
									'title'=>'fields two',
									'type'=>'text',
									'name'=>'name1',
								)
							),
							
						),
						 'subsection2'=>array(
							'title'=>'sub section two',
							'fields'=>array(
								'field1'=>array(
									'title'=>'fields one',
									'type'=>'text',
									'name'=>'name1',
								),
								'field2'=>array(
									'title'=>'fields two',
									'type'=>'text',
									'name'=>'name1',
								)
							),
							
						), 
					),
				),
				 'section2'=>array(
					'title'=>'section two',
					'subsection'=>array(
						'subsection1'=>array(
							'title'=>'sub section one',
							'fields'=>array(
								'field1'=>array(
									'title'=>'fields one',
									'type'=>'text',
									'name'=>'name1',
								),
								'field2'=>array(
									'title'=>'fields two',
									'type'=>'text',
									'name'=>'name1',
								)
							),
							
						),
						'subsection2'=>array(
							'title'=>'sub section two',
							'fields'=>array(
								'field1'=>array(
									'title'=>'fields one',
									'type'=>'text',
									'name'=>'name1',
								),
								'field2'=>array(
									'title'=>'fields two',
									'type'=>'text',
									'name'=>'name1',
								)
							),
							
						),
					),
				),
				'section3'=>array(
					'title'=>'section three',
					'subsection'=>array(
						'subsection1'=>array(
							'title'=>'sub section one',
							'fields'=>array(
								'field1'=>array(
									'title'=>'fields one',
									'type'=>'text',
									'name'=>'name1',
								),
								'field2'=>array(
									'title'=>'fields two',
									'type'=>'text',
									'name'=>'name1',
								)
							),
							
						),
						'subsection2'=>array(
							'title'=>'sub section two',
							'fields'=>array(
								'field1'=>array(
									'title'=>'fields one',
									'type'=>'text',
									'name'=>'name1',
								),
								'field2'=>array(
									'title'=>'fields two',
									'type'=>'text',
									'name'=>'name1',
								)
							),
							
						),
					),
				),
			),
		);
		
		if(isset($_POST['submit'])){
			echo '<pre>';print_r($_POST);echo '</pre>';
		}
		
//echo '<pre>';print_r($data);echo '</pre>';
?> 
<div>
<form action="" method="post" name="formpage">
<?php   if(count($data) > 0){
            echo '<div class="section">';
			$i=1;
		    foreach($data['section'] as $result){
			//echo count($result);
			//echo '<pre>';print_r($result);echo '</pre>';
				/* foreach($result as $res){*/
					//echo '<pre>';print_r($re);echo '</pre>';
					echo '<div class="section">';
					echo '<h3>'.$result["title"].'</h1>';
					echo '<input type="hidden" name="section[section'.$i.']" id="section'.$i.'" value="section" /><input type="text" name="section[section'.$i.'][title]" value="section one '.$i.'" />';
					$j=1;
					foreach($result['subsection'] as $re){
						/*foreach($re as $re1){*/
							//echo '<pre>';print_r($re);echo '</pre>';
							echo '<div class="subsection">';
							echo '<h3>'.$re["title"].'</h1>';
							echo '<input type="hidden" name="section[section'.$i.'][subsection][subsection'.$j.']" id="subsection'.$i.'" value="subsection" /><input type="text" name="section[section'.$i.'][subsection][subsection'.$j.'][title]" value="sub section one '.$i.'" />';
							
							
							echo '</div';
						/*}*/
						$j++;
					}
					echo '</div';
					$i++;
				/*} */
		    }
			echo '</div>';
	    }else{
			echo 'Record not found'; 
		}?>
		<input type="submit" name="submit" value="Submit" />
</form>
</div>
</body>
</html>