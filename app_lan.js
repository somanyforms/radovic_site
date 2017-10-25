var language;
function getLanguage() {
  if(localStorage.getItem('language') == null){
    setLanguage('en');
  }
  else{
    setLanguage(localStorage.getItem('language'));
  }
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  $.ajax({
    url:  '/lang/' +  localStorage.getItem('language') + '.json',
    dataType: 'json',
    success: function (lang) {
      console.log(lang);
      language = lang
      refresh_for_lang();
  } });
}

$(document).ready(function(){
  getLanguage();
});

function refresh_for_lang(){
  $('#h2-about').html(language.about);
  $('#h2-services').html(language.services);
}
