<!-- 按键和车 -->
//<script type = "text/javascript" >
$('.text-text-text').find('.img1').css('display', "none")
$('.text-text-text').find('.img1').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan').click(function() {
	$('.text-text-text').find('.img1').css('display', "none")

	$('.text-text-text').find('.img1').eq($(this).index()).css('display', "block")
	$('.yuan').css('background', 'white')
	$(this).css("background", "#ffe400")
	$('.yuan').css({
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
$('.baitiao').hide()
$('.baitiao').eq(0).show()
$('.text-text').hide()
$('.text-text').eq(0).show()
$('.top1').eq(0).css('color', 'white')
$('.top1').click(function() {
	$('.text-text').hide()
	$('.text-text').eq($(this).index()).show()
	$('.baitiao').hide()
	$('.baitiao').eq($(this).index()).show()
	$('.top1').css('color', '')
	$(this).css("color", "white")
})
// </script>
<!-- 第二个车和元 -->
// <script type="text/javascript">
$('.text-text-text').find('.img2').css('display', "none")
$('.text-text-text').find('.img2').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan2').click(function() {
	$('.text-text-text').find('.img2').css('display', "none")

	$('.text-text-text').find('.img2').eq($(this).index()).css('display', "block")
	$('.yuan2').css('background', 'white')
	$(this).css("background", "#ffe400")
	$('.yuan2').css({
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
$('.text-text-text').find('.img3').css('display', "none")
$('.text-text-text').find('.img3').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan3').click(function() {
	$('.text-text-text').find('.img3').css('display', "none")

	$('.text-text-text').find('.img3').eq($(this).index()).css('display', "block")
	$('.yuan3').css('background', 'white')
	$(this).css("background", "#ffe400")
	$('.yuan3').css({
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
$('.text-text-text').find('.img5').css('display', "none")
$('.text-text-text').find('.img5').eq(0).css('display', "block")

// $('.yuan').eq(0).css('bockground','#ffe400')
$('.yuan5').click(function() {
	$('.text-text-text').find('.img5').css('display', "none")

	$('.text-text-text').find('.img5').eq($(this).index()).css('display', "block")
	$('.yuan5').css('background', 'white')
	$(this).css("background", "#ffe400")
	$('.yuan5').css({
		transform: 'scale(1)'
	})
	$(this).css({
		transform: 'scale(1.2)',
		border: "1px solid white"
	})
})
//</script>
