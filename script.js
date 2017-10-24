var interval, loaderElement;
    function viewInit(e) {
		$("#main").hide();
		loaderElement = kendo.mobile.application.pane.loader.element.find("h1");
        startLoading();    
    }


    function hideLoader() {
        clearInterval(interval);
        kendo.mobile.application.hideLoading(); //hide loading popup
        kendo.mobile.application.changeLoadingMessage("Loading...");
        loaderElement.removeClass("loaderHeading");
    }

    function viewHide(e) {
        showButton.animate({ opacity: 1 });
        hideLoader();
    }

    function startLoading() {
        hideLoader();
        var seconds = 2;

        loaderElement.addClass("loaderHeading");
        kendo.mobile.application.changeLoadingMessage(seconds + " seconds left!");

        kendo.mobile.application.showLoading(); //show loading popup

        interval = setInterval(function() {
            kendo.mobile.application.changeLoadingMessage(--seconds + " seconds left!"); //update text of the loading popup

            if (seconds == 0) {
				$("#main").show();
                hideLoader();
            }
        }, 1000);
    }
	function closeModalViewLogin() {
        $("#modalview-login").kendoMobileModalView("close");
		window.location.assign("demo1.html");
    }
	window.myTouch = {
        swipe: function(e) { kendoConsole.log("swipe " + e.direction); },
        tap: function(e) { kendoConsole.log("tap"); },
        doubletap: function(e) { kendoConsole.log("double tap"); },
        hold: function(e) { kendoConsole.log("hold"); }
    }