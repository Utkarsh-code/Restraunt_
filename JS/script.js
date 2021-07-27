$(function () {

	$("#navbarToggle").blur(function (event){
		var sw=window.innerWidth;
        if(sw<768){
        	$("#collapsable-nav").collapse('hide');
        }
	});
});

(function (global) {
	
	var dc={};
	var homehtml="snippets/home-snippets.html";

	var insertHtml= function (selector, html) {
		var targetElem=document.querySelector(selector);
		targetElem.innerHtml=html;
	};

	var showLoading= function (selector){
		var html="<div class='text-center'> ";
		html+= "<img src='ima/ajax-loader.gif'></div>";
		insertHtml(selector, html);
	};

	document.addEventListener("DOMContentLoaded", function(event){
      

      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
      	homeHtml,
      	function (responseText) {
      		document.querySelector("#main-content")
      		.innerHtml=responseText;
      	},
      	false );
	});

	global.$dc=dc;

})(window);