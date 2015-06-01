function sleep (msec)
{
    var start = new Date().getTime();
    while (new Date().getTime() - start < msec);
}

function try_load_img(ip, timeout, callback) {
    var ping_object = {};

    if (!ping_object.inUse) {
        ping_object.status = 'unchecked';
        ping_object.inUse = true;
        ping_object.callback = callback;
        ping_object.ip = ip;
        var _that = ping_object;
        ping_object.img = new Image();
        ping_object.img.onload = function () {
            _that.inUse = false;
            _that.callback(true, _that.ip);

        };
        ping_object.img.onerror = function (e) {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback(false, _that.ip);
            }

        };
        ping_object.start = new Date().getTime();
        ping_object.img.src = 'http://'+ip+':'+SERVER_PORT.toString() + '/icon.png';
        ping_object.timer = setTimeout(function () {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback(false, _that.ip);
            }
        }, timeout);
    }
}

describe('Network JS API', function() {
    var iCount = 0;     
    var srvHost = '';
    var srvPort = '';
    var srvURL = '';
    var httpsSrvURL = '';
 
    var srvHttpTestMethodsUrl = '';
    var srvHttpDownloadImageUrl = '';
    var srvHttpDownloadImageUrlAuth = '';
    var srvHttpUploadTextFileUrl = '';
    var srvHttpUploadTextFileUrlAuth = '';

    var srvHttpsTestMethodsUrl = '';

    function updateServerUrls(SERVER_HOST, SERVER_PORT, SECURE_HOST, SECURE_PORT) {
        srvHost = SERVER_HOST;
        srvPort = SERVER_PORT;
        srvURL = 'http://'+SERVER_HOST+':'+SERVER_PORT.toString();
        httpsSrvURL = 'https://'+SECURE_HOST+':'+SECURE_PORT.toString();
 
        srvHttpTestMethodsUrl = srvURL + '/test_methods';
        srvHttpDownloadImageUrl = srvURL + '/download_image';
        srvHttpDownloadImageUrlAuth = srvURL + '/download_image_auth';
        srvHttpUploadTextFileUrl = srvURL + '/upload_text_file';
        srvHttpUploadTextFileUrlAuth = srvURL + '/upload_text_file_auth';

        srvHttpsTestMethodsUrl = httpsSrvURL + '/test_methods';
    }

    updateServerUrls(SERVER_HOST, SERVER_PORT, SECURE_HOST, SECURE_PORT);
         
    var imagesDownloadFolder = Rho.RhoFile.join( Rho.Application.userFolder,'images' );
    Rho.RhoFile.makeDir(imagesDownloadFolder);
         
    var waitTimeout = 90000;
    var serverTestTimeout = 10000;
    
    var callbackCount = 0;
         
    var connectionInfo = '';
    var failureMsg = '';
         
    var detectConnectionCallback = function(args) {
        callbackCount += 1;
        connectionInfo = args.connectionInformation;
        failureMsg = args.failureMessage;
        Rho.Log.info('detectConnectionCallback, count = ' + callbackCount.toString() + 'failureMsg: ' + failureMsg, 'net_spec' );
    };
	
    
    beforeEach(function() {
        callbackCount = 0;
        connectionInfo = '';
        failureMsg = '';
    });
         
    afterEach(function() {
        var netCB = function(){
            console.log("Network callback");
        };
        Rho.Network.stopDetectingConnection(netCB);
    });

    
	
	function sleep (msec)
{
    var start = new Date().getTime();
    while (new Date().getTime() - start < msec);
}

function try_load_img(ip, timeout, callback) {
    var ping_object = {};

    if (!ping_object.inUse) {
        ping_object.status = 'unchecked';
        ping_object.inUse = true;
        ping_object.callback = callback;
        ping_object.ip = ip;
        var _that = ping_object;
        ping_object.img = new Image();
        ping_object.img.onload = function () {
            _that.inUse = false;
            _that.callback(true, _that.ip);

        };
        ping_object.img.onerror = function (e) {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback(false, _that.ip);
            }

        };
        ping_object.start = new Date().getTime();
        ping_object.img.src = 'http://'+ip+':'+SERVER_PORT.toString() + '/icon.png';
        ping_object.timer = setTimeout(function () {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback(false, _that.ip);
            }
        }, timeout);
    }
}

describe('Network JS API', function() {
    var iCount = 0;     
    var srvHost = '';
    var srvPort = '';
    var srvURL = '';
    var httpsSrvURL = '';
 
    var srvHttpTestMethodsUrl = '';
    var srvHttpDownloadImageUrl = '';
    var srvHttpDownloadImageUrlAuth = '';
    var srvHttpUploadTextFileUrl = '';
    var srvHttpUploadTextFileUrlAuth = '';

    var srvHttpsTestMethodsUrl = '';

    function updateServerUrls(SERVER_HOST, SERVER_PORT, SECURE_HOST, SECURE_PORT) {
        srvHost = SERVER_HOST;
        srvPort = SERVER_PORT;
        srvURL = 'http://'+SERVER_HOST+':'+SERVER_PORT.toString();
        httpsSrvURL = 'https://'+SECURE_HOST+':'+SECURE_PORT.toString();
 
        srvHttpTestMethodsUrl = srvURL + '/test_methods';
        srvHttpDownloadImageUrl = srvURL + '/download_image';
        srvHttpDownloadImageUrlAuth = srvURL + '/download_image_auth';
        srvHttpUploadTextFileUrl = srvURL + '/upload_text_file';
        srvHttpUploadTextFileUrlAuth = srvURL + '/upload_text_file_auth';

        srvHttpsTestMethodsUrl = httpsSrvURL + '/test_methods';
    }

    updateServerUrls(SERVER_HOST, SERVER_PORT, SECURE_HOST, SECURE_PORT);
         
    var imagesDownloadFolder = Rho.RhoFile.join( Rho.Application.userFolder,'images' );
    Rho.RhoFile.makeDir(imagesDownloadFolder);
         
    var waitTimeout = 90000;
    var serverTestTimeout = 10000;
    
    var callbackCount = 0;
         
    var connectionInfo = '';
    var failureMsg = '';
         
    var detectConnectionCallback = function(args) {
        callbackCount += 1;
        connectionInfo = args.connectionInformation;
        failureMsg = args.failureMessage;
        Rho.Log.info('detectConnectionCallback, count = ' + callbackCount.toString() + 'failureMsg: ' + failureMsg, 'net_spec' );
    };
	
    
    beforeEach(function() {
        callbackCount = 0;
        connectionInfo = '';
        failureMsg = '';
    });
         
    afterEach(function() {
        var netCB = function(){
            console.log("Network callback");
        };
        Rho.Network.stopDetectingConnection(netCB);
    });

    

    xit('VT293-0012 | platform', function() {
					function sleeptest(){
							for (var i = 0; i < 1001; i++) { 
								console.log(Rho.System.platform);
								
							}
						}

       
       runs( function() {
     
            sleeptest();
            
        } );
       
        runs(function() {

        });
       
    });
	
	it('VT293-0014 | File test', function() {
				function sleepfiletest()
					{
						for (var i = 0; i < 1001; i++) 
						{ 
							var fname = Rho.RhoFile.join(Rho.Application.userFolder,"/images/myfile.txt");
							var file = new Rho.RhoFile(fname, Rho.RhoFile.OPEN_FOR_WRITE);
							file.write("This is test");
							
							file.read(fname);
							 file.close();
							Rho.RhoFile.deleteFile(fname);
							 console.log("Test Nadaf");
							 //alert(fname);
							
						}
					}

       
       runs( function() {
     
            sleepfiletest();
            
        } );
       



       
	});


	
});

       
});
