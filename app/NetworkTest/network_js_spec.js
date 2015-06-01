

describe('Network JS API', function() {
   

    

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
						{   //alert("0");
							var fname = Rho.RhoFile.join(Rho.Application.userFolder,"/images/myfile.txt");
                            //alert("1");
							var file = new Rho.RhoFile(fname, Rho.RhoFile.OPEN_FOR_WRITE);
                            //alert("2");
							file.write("This is test");
							 //alert("2.1");
							file.read(5);
                            //alert("3");
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

       
