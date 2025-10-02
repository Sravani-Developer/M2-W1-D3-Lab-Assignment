
$(document).ready(function () {
  var $backdrop = $(".lb-backdrop");
  var $dialog   = $(".lb-dialog");
  var $img      = $(".lb-img");
  var $caption  = $(".lb-caption");

  function openLightbox(src, $captionNode) {
    
    var $cloned = $captionNode.contents().clone();
    $caption.empty().append($cloned); 

    $img.attr("src", src);
    $img.attr("alt", $cloned.text().trim());
    $backdrop.fadeIn(150).attr("aria-hidden", "false");
    $dialog.find(".lb-close").trigger("focus");
  }

  function closeLightbox() {
    $backdrop.fadeOut(120).attr("aria-hidden", "true");
  }

  $(document).on("click", ".gallery li .media img", function (e) {
    e.preventDefault();
    e.stopPropagation(); 
    var $li  = $(this).closest("li");
    var src  = $(this).attr("src");
    var $cap = $li.find(".caption");
    openLightbox(src, $cap);
  });

  $(document).on("click", ".gallery li .description, .gallery li .caption", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".lb-close", function (e) {
    e.preventDefault();
    closeLightbox();
  });

  
  $backdrop.on("click", function (e) {
    if ($(e.target).is(".lb-backdrop")) closeLightbox();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
