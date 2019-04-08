import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles.css";

$(".submit").click(function() {
	let email = $("#email").val();
	let password = $("#password").val();
	$.ajax({
		url: "https://reqres.in/api/register",
		method: "POST",
		data: {
			email: email,
			password: password
		},
		success: function (response) {
			$("#result").html(`The token value is: ${response.token}`);
		},
		error: function(error){
			$("#result").html(`Something went wrong. Please try again.`);
		}
	})
});
