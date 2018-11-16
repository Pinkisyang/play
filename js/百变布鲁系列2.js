<!-- 按键和车 -->
//<script type = "text/javascript" >
$('.text-text-text').find('.img12').css('display', "none")
$('.text-text-text').find('.img12').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan22').click(function() {
	$('.text-text-text').find('.img12').css('display', "none")

	$('.text-text-text').find('.img12').eq($(this).index()).css('display', "block")
	$('.yuan22').css('background', 'white')
	$(this).css("background", "#e6454a")
	$('.yuan22').css({
		transform: 'scale(1)'
	})
	$(this).css({
		transform: 'scale(1.2)',
		border: "1px solid white"
	})
})
//</script>
<!-- 上边和车 -->
// <script type="text/javascript">
$('.baitiao2').hide()
$('.baitiao2').eq(0).show()
$('.text-text2').hide()
$('.text-text2').eq(0).show()
$('.top12').css({'color':'white',"opacity":"0.5"})
$('.top12').eq(0).css({'color':'white',"opacity":"0.5"})
$('.top12').click(function() {
	$('.text-text2').hide()
	$('.text-text2').eq($(this).index()).show()
	$('.baitiao2').hide()
	$('.baitiao2').eq($(this).index()).show()
	$('.top12').css({'color': 'white'})
	$(this).css({"color": "white","opacity":"1"})
})
// </script>
<!-- 第二个车和元 -->
// <script type="text/javascript">
$('.text-text-text').find('.img222').css('display', "none")
$('.text-text-text').find('.img222').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan222').click(function() {
	$('.text-text-text').find('.img222').css('display', "none")

	$('.text-text-text').find('.img222').eq($(this).index()).css('display', "block")
	$('.yuan222').css('background', 'white')
	$(this).css("background", "#e6454a")
	$('.yuan222').css({
		transform: 'scale(1)'
	})
	$(this).css({
		transform: 'scale(1.2)',
		border: "1px solid white"
	})
})
// </script>
<!-- 第3个和车 -->
//<script type = "text/javascript" >
$('.text-text-text').find('.img32').css('display', "none")
$('.text-text-text').find('.img32').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan32').click(function() {
	$('.text-text-text').find('.img32').css('display', "none")

	$('.text-text-text').find('.img32').eq($(this).index()).css('display', "block")
	$('.yuan32').css('background', 'white')
	$(this).css("background", "#ffe400")
	$('.yuan32').css({
		transform: 'scale(1)'
	})
	$(this).css({
		transform: 'scale(1.2)',
		border: "1px solid white"
	})
})
//</script>
<!-- 第5个和车 -->
//<script type = "text/javascript" >
$('.text-text-text').find('.img42').css('display', "none")
$('.text-text-text').find('.img42').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan42').click(function() {
	$('.text-text-text').find('.img42').css('display', "none")

	$('.text-text-text').find('.img42').eq($(this).index()).css('display', "block")
	$('.yuan42').css('background', 'white')
	$(this).css("background", "#ffe400")
	$('.yuan42').css({
		transform: 'scale(1)'
	})
	$(this).css({
		transform: 'scale(1.2)',
		border: "1px solid white"
	})
})
//</script>
