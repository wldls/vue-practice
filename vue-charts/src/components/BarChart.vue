<template>
	<div>
		<canvas ref="barChart" id="barChart" width="400" height="400"></canvas>	  
	</div>
</template>

<script>
// chart 컴포넌트 모듈화
// import Chart from 'chart.js';

export default {
	props:['propsdata'],
	mounted(){
			// var ctx = document.getElementById('barChart');
			const myChart = new this.$_Chart(this.$refs.barChart, {
					type: 'bar',
					data: {
							labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
							datasets: this.propsdata
					},
					options: {
							scales: {
									yAxes: [{
											ticks: {
													beginAtZero: true
											}
									}]
							}
					}
			});

		console.log(myChart);
	}
}
</script>

<style>

</style>