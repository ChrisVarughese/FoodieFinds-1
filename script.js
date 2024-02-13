window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');

}

function myMap() {
  var myCenter = new google.maps.LatLng(52.636872, -1.139748);
  var YoursSupermarket = new google.maps.LatLng(52.6412442, -1.1287356);
  var FalconCashCarry = new google.maps.LatLng(52.6393552, -1.1278475);
  var ShivaShaktiFoods = new google.maps.LatLng(52.6493063, -1.1260697);
  var NoorGrocery = new google.maps.LatLng(52.6377959, -1.1169122);

  var mapProp = {
    center: myCenter,
    zoom: 12,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({ position: YoursSupermarket });
  marker.setMap(map);

  var marker2 = new google.maps.Marker({ position: FalconCashCarry });
  marker2.setMap(map);

  var marker3 = new google.maps.Marker({ position: ShivaShaktiFoods });
  marker3.setMap(map);

  var marker4 = new google.maps.Marker({ position: NoorGrocery });
  marker4.setMap(map);

};

//center: new google.maps.LatLng(),
//  zoom: 12,

function Alert() {
  alert("Thank you for submitting your recipe! We will review it and get back to you as soon as possible.",);
}