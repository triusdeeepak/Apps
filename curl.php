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
$count=1;
for ($i=1; $i < 12; $i++) {
	$url_data = get_data('http://www.cdkeys.com/pc/games/'.$i.'?limit=50');
	$all_listing = explode('<ul class="products-grid category-products-grid itemgrid itemgrid-adaptive itemgrid-5col centered hover-effect equal-height size-s">', $url_data);
	$all_listing = explode('</ul>', $all_listing['1']);
	$all_listing = explode('<li class="item">', $all_listing['0']);
	foreach ($all_listing as $key => $value) {
		if($key != 0){
			/*--name--*/
			$name_0 = explode('<h2 class="product-name">', $value);		
			$name_1 = explode('</h2>', $name_0['1']);
			$name = $name_1['0'];
			$all_data[$count]['name']=$name;
			/*--link--*/
			$link_0 = explode('href="', $value);
			$link_1 = explode('"', $link_0['1']);
			$link = $link_1['0'];
			$all_data[$count]['link']=$link;
			/*--get-in-stock- */
			$stock_0 = get_data($link);		
			$stock_1 = explode('<p class="availability in-stock">', $stock_0);
			if(isset($stock_1['1'])){			
				$stock_2 = explode('</p>', $stock_1['1']);
				$stock = $stock_2['0'];
				$all_data[$count]['stock']=$stock;
			}
			/*--special-price--*/
			$price_0 = explode("<span class='price' style='display:inline'>", $value);
			if(isset($price_0['1'])){
				$price_1 = explode('</span>', $price_0['1']);
				$price = $price_1['0'];
				$all_data[$count]['price']=$price;			
			}
			/*--image--*/
			$img_0 = explode('src="', $value);
			$img_1 = explode('"', $img_0['1']);
			$img = $img_1['0'];
			$all_data[$count]['img']=$img;
			$count++;
		}
	}
}
echo "<pre>";
print_r($all_data)
?>