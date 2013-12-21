$(document).ready(function() {
  $('.item-cart-buttons .btn-primary').click(function() {
    $('.nav-cart-empty').hide();
    $('.nav-cart').show();
    $('.nav-cart').addClass('open');
    $('.nav-cart .dropdown-menu li:first-child').hide();
    $('.nav-cart .cart-total').hide();
    $('.nav-cart .cart-buttons').hide();
    $('.item-cart-buttons').hide();
    $('.item-cart-buttons-added').show();
    $('.cart-item a').addClass('added-item');
  });
  $('.nav-cart').mouseenter(function() {
    $('.nav-cart').addClass('open');
    $('.nav-cart .dropdown-menu h3').text('My Cart');
    $('.nav-cart .dropdown-menu li:first-child').show();
    $('.nav-cart .cart-more-items').hide();
    $('.nav-cart .cart-total').show();
    $('.nav-cart .cart-buttons').show();
    $('.cart-item a').removeClass('added-item');
  });
  $('.nav-cart').mouseleave(function() {
    $('.nav-cart').removeClass('open');
  });
	$('.calendar').pickmeup({
		flat	: true
	});
});