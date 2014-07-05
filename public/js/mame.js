/*
 * mameのメインjavascriptソース
 *
 */
/*
var mame = function mame(){
	this.peer = new Peer({key : this.APIKEY, debug : this.DEBUG_MODE});
	this.peer.on('open', function(id) {
		this.myId = id;
		console.log('My peer ID is: ' + this.myId);
	});

	this.peer.on('connection', connect);
};

Mame.prototype.APIKEY = "6165842a-5c0d-11e3-b514-75d3313b9d05";
Mame.prototype.DEBUG_MODE = 0;

Mame.prototype.send = function(to) {
	console.log("connect to " + to);
	var conn = this.peer.connect(to);

	conn.on('open', function(){
		console.log("conn.on('data') called.");
		conn.send("Hello!");
		connect(conn);
	});
}
*/
var mame = function() {

	var APIKEY = "6165842a-5c0d-11e3-b514-75d3313b9d05";
	var DEBUG_MODE = 0;

	var peer = null;
	var myid = null;


	var connect = function(c) {
		console.log("peer.on('connection') called.");
		c.on('data', receive);
	}

	var receive = function(data) {
		console.log('Received: ' + data);
	}

	return {
		// 最初に呼ぶ
		init : function() {
			peer = new Peer({key : APIKEY, debug : DEBUG_MODE});
			peer.on('open', function(id) {
				myId = id;
				console.log('My peer ID is: ' + myId);
			});
			peer.on('connection', connect);
		},

		// 最初に接続するときに呼ぶ
		connecting : function(to) {
			console.log("connect to " + to);
			var conn = peer.connect(to);

			conn.on('open', function(){
				console.log("conn.on('data') called.");
				conn.send("Hello!");
				connect(conn);
			});
		}
	}
}();

/*
button.onclick = function() {
				var anotherID =  document.getElementById("hoge").value;
				console.log("connect to "+ anotherID);
				var conn = peer.connect(anotherID);
				conn.on('open', function() {
					conn.send("Hello!");
				});
				conn.on('data', function(data) {
						console.log("conn.on('data') called.");
						conn.on('data', function(data) {
							console.log("conn.on('data') called.");
							console.log('Received', data);
							});
						conn.send('Hello! This is Host');
						console.log('Received', data);
				});
			};
			
			peer.on('open', function(id) {
				console.log("peer.on(open) called.");
				console.log('My peer ID is: ' + id);
			});
			
			peer.on('connection', function(conn) {
					console.log("peer.on('connection') called.");
					conn.on('open', function() {
						console.log("conn.on('open') called.");
						conn.on('data', function(data) {
							console.log("conn.on('data') called.");
							console.log('Received', data);
						});
					});
					conn.on('error', function(e){
						console.log("conn.on('error') called.");
						console.log(e);
					});
			});
*/