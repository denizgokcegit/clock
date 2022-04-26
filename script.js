var myName=prompt("Lütfen kullanıcı adını giriniz")
document.getElementById("myName").innerHTML=`${myName}`
function showTime() {
    // Days
    var date = new Date();
    var days = new Array("Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi")
    var dayName = date.getDay();
    // clock
    var hours = zero(date.getHours());
    var minutes = zero(date.getMinutes());
    var seconds = zero(date.getSeconds());
    function zero(startNumber) {
      if (startNumber < 10) {
        return "0" + startNumber
      } else {
        return startNumber
      }
    }
    document.getElementById("myClock").innerHTML = `  ${hours}:${minutes}:${seconds} GMT+3 ${days[dayName]} `;
  }
  // her 1 saniyede showTime fonksiyonunu yeniden çalıştır
  setInterval(showTime, 1000);