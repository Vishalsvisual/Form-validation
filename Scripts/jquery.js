$(document).ready(function(){
	
	$('#signup_btn').click(function(){
		
		$('#login').fadeOut(function(){
			$('#signup').fadeIn();
		});
		
		$(this).css({
				'background':'#f2f2f2',
				'color':'#000',
				'border-top':'6px solid #4caf50',
			
		});
		
		$('#login_btn').css({
			
			'background':'#d9d9d9',
			'color':'#666',
			'border-top':'6px solid #d9d9d9',
			
		});
		
	});
	
		$('#login_btn').click(function(){
		
		$('#signup').fadeOut(function(){
			$('#login').fadeIn();
		});
		
		$('#signup_btn').css({

			'background':'#d9d9d9',
			'color':'#666',
			'border-top':'6px solid #d9d9d9',
		});
		$(this).css({
			'background':'#f2f2f2',
			'color':'#000',
			'border-top':'6px solid #4caf50',
			
		});
		
	});
	
	var message,email,password;
	var first_name_status,last_name_status,father_name_status,mother_name_status,dob_status,college_name_status,aadhar_status,gender_status,signup_email_status,signup_password_status,confirm_password_status,login_email_status,login_password_status=false;
	
	$('#first_name').keyup(function(){
		validate_first_name();
	});
	$('#last_name').keyup(function(){
		validate_last_name();
	});
	$('.gender').click(function(){
		validate_gender();
	});
	$('#signup_email').keyup(function(){
		validate_signup_email();
	});
	$('#father_name').keyup(function(){
		validate_father_name();
	});
	$('#mother_name').keyup(function(){
		validate_mother_name();
	});
	$('#college_name').keyup(function(){
		validate_college_name();
	});
	$('#aadhar').keyup(function(){
		validate_aadhar();
	});
	$('#signup_password').keyup(function(){
		validate_signup_password();
	});
	$('#confirm_password').keyup(function(){
		validate_confirm_password();
	});
	
	$('#signup_submit').click(function(){
		validate_first_name();
		validate_last_name();
		validate_gender();
		validate_signup_email();
		validate_father_name();
		validate_mother_name();
		validate_college_name();
		validate_aadhar();
		validate_terms_conditions();
		validate_signup_password();
		validate_confirm_password();
		
		if( first_name_status && last_name_status && gender_status && signup_email_status && father_name_status && mother_name_status && aadhar_status && college_name_status && signup_password_status && confirm_password_status )
		{
			$('#signup').html("<h2>You are signed up.</h2>")
		}
		
	});
	
	$('#login_email').keyup(function(){
		validate_login_email();
	});
	
	$('#login_password').keyup(function(){
		validate_login_password();
	});
	
	$('#login_submit').click(function(){
		validate_login_password();
		validate_login_email();
		
		if( login_password_status && login_email_status )
		{
			$('#form_div').html("").html("<h2>You are logged in.</h2>");
			$('.btn_style').hide();
		}
		
	});
	
	
	
function validate_first_name()
{
	var val_first_name= $('#first_name').val();
	
	if( val_first_name == "")
	{
		message='Please enter your first name!';
		display_info('#first_name_error',message);
		$('#first_name').css('borderColor','red');
		$('#first_name_checked').html("");
		first_name_status=false;
	}
	else if( val_first_name.length < 3 )
	{
		message='First name is too short!';
		display_info('#first_name_error',message);
		$('#first_name').css('borderColor','red');
		$('#first_name_checked').html("");
		first_name_status=false;
	}
	else
	{
		$('#first_name_error').css('display','none');
		$('#first_name').css('borderColor','#fff');
		$('#first_name_checked').html("<img src='Images/checked.png'>");
		first_name_status=true;
	}
	
}


function validate_last_name()
{
	var val_last_name= $('#last_name').val();
	
	if( val_last_name == "")
	{
		message='Please enter your last name!';
		display_info('#last_name_error',message);
		$('#last_name').css('borderColor','red');
		$('#last_name_checked').html("");
		last_name_status=false;
	}
	else if( val_last_name.length < 3 )
	{
		message='Last name is too short!';
		display_info('#last_name_error',message);
		$('#last_name').css('borderColor','red');
		$('#last_name_checked').html("");
		last_name_status=false;
	}
	else
	{
		$('#last_name_error').css('display','none');
		$('#last_name').css('borderColor','#fff');
		$('#last_name_checked').html("<img src='Images/checked.png'>");
		last_name_status=true;
	}
	
}

function validate_gender()
{
	if( $('.gender').is(':checked') == false )
	{
		message='Please select your gender!';
		display_info('#gender_error',message);
		$('#gender_error').css('top','0px');
		$('#gender_checked').html("");
		gender_status=false;
	}
	else
	{
		$('#gender_error').css('display','none');
		$('#gender_checked').html("<img src='Images/checked.png'>").css('top','0');
		gender_status=true;
	}
	
}

function validate_signup_email()
{
	var val_signup_email= $('#signup_email').val();
	var email_pattern = /\w+@\w+\.(com|net|edu|org)/;															
	
	if( val_signup_email == "")
	{
		message='Please enter your email!';
		display_info('#signup_email_error',message);
		$('#signup_email').css('borderColor','red');
		$('#signup_email_checked').html("");
		signup_email_status=false;
	}
	else if( email_pattern.test(val_signup_email) == false )
	{
		message='Your email address is invalid!';
		display_info('#signup_email_error',message);
		$('#signup_email').css('borderColor','red');
		$('#signup_email_checked').html("");
		signup_email_status=false;
	}
	else
	{
		email=val_signup_email;
		$('#signup_email_error').css('display','none');
		$('#signup_email').css('borderColor','#fff');
		$('#signup_email_checked').html("<img src='Images/checked.png'>");
		signup_email_status=true;
	}
}
	
function validate_father_name()
{
	var val_father_name= $('#father_name').val();
	
	if( val_father_name == "")
	{
		message="Please enter your Father's name!";
		display_info('#father_name_error',message);
		$('#father_name').css('borderColor','red');
		$('#father_name_checked').html("");
		father_name_status=false;
	}
	else if( val_father_name.length < 3 )
	{
		message='Father name is too short!';
		display_info('#father_name_error',message);
		$('#father_name').css('borderColor','red');
		$('#father_name_checked').html("");
		father_name_status=false;
	}
	else
	{
		$('#father_name_error').css('display','none');
		$('#father_name').css('borderColor','#fff');
		$('#father_name_checked').html("<img src='Images/checked.png'>");
		father_name_status=true;
	}
	
}
		
function validate_mother_name()
{
	var val_mother_name= $('#mother_name').val();
	
	if( val_mother_name == "")
	{
		message="Please enter your Mother's name!";
		display_info('#mother_name_error',message);
		$('#mother_name').css('borderColor','red');
		$('#mother_name_checked').html("");
		mother_name_status=false;
	}
	else if( val_mother_name.length < 3 )
	{
		message='Mother name is too short!';
		display_info('#mother_name_error',message);
		$('#mother_name').css('borderColor','red');
		$('#mother_name_checked').html("");
		mother_name_status=false;
	}
	else
	{
		$('#mother_name_error').css('display','none');
		$('#mother_name').css('borderColor','#fff');
		$('#mother_name_checked').html("<img src='Images/checked.png'>");
		mother_name_status=true;
	}
	
}
			
function validate_college_name()
{
	var val_college_name= $('#college_name').val();
	
	if( val_college_name == "")
	{
		message="Please enter your College's name!";
		display_info('#college_name_error',message);
		$('#college_name').css('borderColor','red');
		$('#college_name_checked').html("");
		college_name_status=false;
	}
	else if( val_college_name.length < 3 )
	{
		message='College name is too short!';
		display_info('#college_name_error',message);
		$('#college_name').css('borderColor','red');
		$('#college_name_checked').html("");
		college_name_status=false;
	}
	else
	{
		$('#college_name_error').css('display','none');
		$('#college_name').css('borderColor','#fff');
		$('#college_name_checked').html("<img src='Images/checked.png'>");
		college_name_status=true;
	}
	
}
			
function validate_aadhar()
{
	var val_aadhar= $('#aadhar').val();
	
	if( val_aadhar == "")
	{
		message="Please enter your Aadhar Number!";
		display_info('#aadhar_error',message);
		$('#aadhar').css('borderColor','red');
		$('#aadhar_checked').html("");
		aadhar_status=false;
	}
	else if( val_aadhar.length != 12 )
	{
		message='Aadhar number is short!';
		display_info('#aadhar_error',message);
		$('#aadhar').css('borderColor','red');
		$('#aadhar_checked').html("");
		aadhar_status=false;
	}
	else
	{
		$('#aadhar_error').css('display','none');
		$('#aadhar').css('borderColor','#fff');
		$('#aadhar_checked').html("<img src='Images/checked.png'>");
		aadhar_status=true;
	}
	
}

function validate_signup_password()
{
	var val_signup_password= $('#signup_password').val();														
	
	if( val_signup_password == "")
	{
		message='Please enter your password!';
		display_info('#signup_password_error',message);
		$('#signup_password').css('borderColor','red');
		$('#signup_password_error').css({'whiteSpace':'nowrap','width':''});
		$('#signup_password_checked').html("");
		signup_password_status=false;
	}
	else if( val_signup_password.length< 6 == true || val_signup_password.search(/[A-Z]/) == -1 || val_signup_password.search(/[a-z]/) == -1 || val_signup_password.search(/[0-9]/) == -1 || val_signup_password.search(/[ !|@|#|$|%|^|&|*|_ ]/) == -1 )
	{
		message='Requirement: 6 characters, one capital letter, one lowercase letter, atleast one digit and one special character!';
		display_info('#signup_password_error',message);
		$('#signup_password').css('borderColor','red');
		$('#signup_password_error').css({'whiteSpace':'normal','width':'340px'});
		$('#signup_password_checked').html("");
		signup_password_status=false;
	}
	else
	{
		$('#signup_password_error').css('display','none');
		$('#signup_password').css('borderColor','#fff');
		$('#signup_password_checked').html("<img src='Images/checked.png'>");
		signup_password_status=true;
	}
}

function validate_confirm_password()
{
	var val_signup_password= $('#signup_password').val();														
	var val_confirm_password= $('#confirm_password').val();														
	
	if( val_confirm_password == "")
	{
		message='Please re-enter your password!';
		display_info('#confirm_password_error',message);
		$('#confirm_password').css('borderColor','red');
		$('#confirm_password_checked').html("");
		confirm_password_status=false;
	}
	else if( val_signup_password != val_confirm_password )
	{
		message='Password does not match!';
		display_info('#confirm_password_error',message);
		$('#confirm_password').css('borderColor','red');
		$('#confirm_password_checked').html("");
		confirm_password_status=false;
	}
	else
	{
		password=val_signup_password;
		$('#confirm_password_error').css('display','none');
		$('#confirm_password').css('borderColor','#fff');
		$('#confirm_password_checked').html("<img src='Images/checked.png'>");
		confirm_password_status=true;
	}
}

function validate_login_email()
{
	var val_login_email= $('#login_email').val();															
	
	if( val_login_email == "")
	{
		message='Please enter your email!';
		display_info('#login_email_error',message);
		$('#login_email').css('borderColor','red');
		$('#login_email_checked').html("");
		login_email_status=false;
	}
	else if( val_login_email != email )
	{
		message='Your email address does not exist!';
		display_info('#login_email_error',message);
		$('#login_email').css('borderColor','red');
		$('#login_email_checked').html("");
		login_email_status=false;
	}
	else
	{
		$('#login_email_error').css('display','none');
		$('#login_email').css('borderColor','#fff');
		$('#login_email_checked').html("<img src='Images/checked.png'>");
		login_email_status=true;
	}
	
	
}

function validate_login_password()
{
	var val_login_password= $('#login_password').val();														
	
	if( val_login_password == "")
	{
		message='Please enter your password!';
		display_info('#login_password_error',message);
		$('#login_password').css('borderColor','red');
		$('#login_password_checked').html("");
		login_password_status=false;
	}
	else if( val_login_password != password )
	{
		message='Password is incorrect!';
		display_info('#login_password_error',message);
		$('#login_password').css('borderColor','red');
		$('#login_password_checked').html("");
		login_password_status=false;
	}
	else
	{
		$('#login_password_error').css('display','none');
		$('#login_password').css('borderColor','#fff');
		$('#login_password_checked').html("<img src='Images/checked.png'>");
		login_password_status=true;
	}
	
	
}
	
function display_info(error_div,message)
{
	$(error_div).html("<img src='Images/arrow.png'><span style='color:#fff;'>"+message+"</span> ").css({
		
		'background':'red',
		'paddingTop':'10px',
		'paddingBottom':'12px',
		'padding':'10px',
		'border':'2px solid #000',
		'display':'block'
		
	});
	
}
	
	
});









