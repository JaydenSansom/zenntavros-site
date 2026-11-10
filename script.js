// Wait for the document to load before running the script 
(function ($) {
  
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // Now show the region specified in the URL hash
    $(region).show();
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
    
  });
  
})(jQuery);

document.querySelector('.heart').addEventListener('click', e => {
  const r = e.target.getBoundingClientRect();
  const count = 8 + Math.floor(Math.random() * 6);
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'burst';
    h.textContent = '\u2665';
    h.style.left = r.left + r.width / 2 + 'px';
    h.style.top = r.top + r.height / 2 + 'px';
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 120;
    h.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    h.style.setProperty('--dy', Math.sin(angle) * dist - 60 + 'px');
    h.style.setProperty('--rot', (Math.random() - 0.5) * 360 + 'deg');
    document.body.appendChild(h);
    h.addEventListener('animationend', () => h.remove());
  }
});
