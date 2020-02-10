<template>
	<!-- <li>
		{{ item }}
	</li> -->
	<li>
		<slot>
			<!-- NOTE: 등록하는 곳에서 정의할 영역 -->
			<!-- slot을 사용하여 item 컴포넌트까지 데이터 정보가 내려오지 않고 화면에 보여주는 역할만 함 -->
		</slot>
	</li>
</template>

<script>
// export default {
// 	props:['item']
// }
</script>