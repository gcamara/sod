;(function() {

	'use strict'

	$('.link').on('click', function() { 
		$(this).toggleClass('active') 
	})

	var options = {
			       responsive: true,
			       maintainAspectRatio: false,
			       scales: { yAxes: [{ ticks: { beginAtZero:true } }] }
			    }
	var sd = {
		createChart: function(id) {
			var ctx = $(id).get(0).getContext('2d')
			var data = {
				labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
				datasets: [{ data: [20, 30, 40, 50, 60, 12, 44, 23, 10, 9, 55],
							 label: "CPU 1",
							 fill: false,
							 borderColor: "#444",
							 lineTension: 0 }, 
						   { data: [40, 90, 33, 12, 59, 98, 100, 88, 37, 14, 12],
						   	 label: "CPU 2",
						   	 fill: false,
						   	 lineTension: 0,
						   	 borderColor: "#AAA" },]
			}
			new Chart(ctx, {
			    type: 'line',
			    data: data,
			    options: options
			});
		},
		createDoughnut: function(id) {
			var ctx = id.get(0).getContext('2d')
			var data = {
    		datasets: [{
        			data: [10, 20],
        			backgroundColor: ["#444", "#AAA"] }],
		    labels: [
		        'CPU',
		        'Memory' ]
			};
			new Chart(ctx, {
				type: 'doughnut',
				data: data,
				options: {
			       	responsive: true,
			       	maintainAspectRatio: false,
					cutoutPercentage: 80,
				}
			})
		},

		getCurrentDate: function() {
			var today = new Date()
			var hh = today.getHours()
			var mm = today.getMinutes()

			var ss = today.getSeconds()
			if(hh<10){
			    dd='0'+dd
			} 
			if(mm<10){
			    mm='0'+mm
			}
			if (ss< 10)
				ss='0'+ss
			var today = hh+':'+mm+':'+ss
			return "["+today+"] - ";
		},

		log: (text) => {
			$('.console div').append("<span>"+sd.getCurrentDate() + text+"<br/></span>")
		}
	}


	$('#totalCPU').ready(() => { sd.createChart('#totalCPU') })
	$('#totalMemory').ready(() => { sd.createChart('#totalMemory') })
	$('canvas[id^="cpu"]').each(function() { sd.createDoughnut($(this)) })
	sd.log("System Started...")
	sd.log("4 Entities online")

	window.sd = sd

})()