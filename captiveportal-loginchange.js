var userDiv = document.getElementById('user_pass');
var voucherDiv = document.getElementById('voucher');

var userBtn = document.getElementById('user_btn');
var voucherBtn = document.getElementById('voucher_btn');

userDiv.style.display = 'none';

userBtn.addEventListener("click", function(){
  userDiv.style.display = 'block';
  voucherDiv.style.display = 'none';
});
voucherBtn.addEventListener("click", function(){
  userDiv.style.display = 'none';
  voucherDiv.style.display = 'block';
});
