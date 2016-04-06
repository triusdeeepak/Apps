<?php
function get_data($url){
	$curl_handle=curl_init();
	curl_setopt($curl_handle, CURLOPT_URL, $url);
	curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 2);
	curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl_handle, CURLOPT_USERAGENT, 'My Crawling');
	$query = curl_exec($curl_handle);
	return $query; 
	curl_close($curl_handle);
}
$all_data = array();
//$url_data = get_data('https://www.freelancer.in/jobs/1/');	
$url_data = file_get_contents("https://www.freelancer.in/jobs/");
$url_data1 = explode('<tbody class="ProjectTable-body">', $url_data);
//$url_data2 = explode('</tbody">', $url_data[0]);
echo "<pre>";
print_r($url_data1);
echo "</pre>";
?>