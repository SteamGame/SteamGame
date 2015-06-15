$(document).ready(function() {
    $('#leaderboarddata').dataTable( {
        "ajax": "data/leaderboard.json",
	"sDom": '<"top">rt<"bottom"><"clear">',
	"order": [[ 0, "asc" ]],
        "iDisplayLength": 20,

 	"columnDefs": [
    		{ type: 'num-html', className: "dt-right", "targets": [ 0, 2,3,4,5,6,7,8,9 ] },
		{ className: "dt-center", "targets": [ 1 ], "orderable": false }
  	]
    } );
} );

 
setInterval( function () {
	$('#leaderboarddata').DataTable().ajax.reload(null, false);
}, 10000 );

