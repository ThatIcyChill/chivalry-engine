function CheckPasswords(e){$.ajax({type:"POST",url:"check.php",data:"password="+escape(e),success:function(e){$("#passwordresult").html(e)}})}function goBack(){window.history.back()}function CheckUsername(e){$.ajax({type:"POST",url:"checkun.php",data:"username="+escape(e),success:function(e){$("#usernameresult").html(e)}})}function CheckEmail(e){$.ajax({type:"POST",url:"checkem.php",data:"email="+escape(e),success:function(e){$("#emailresult").html(e)}})}function PasswordMatch(){pwt1=$("#pw1").val(),pwt2=$("#pw2").val(),pwt1==pwt2?(document.getElementById("pw2").style.backgroundColor="#dff0d8",document.getElementById("submit").className="btn btn-lg btn-success"):(document.getElementById("pw2").style.backgroundColor="#f2dede",document.getElementById("submit").className="btn btn-lg btn-danger")}