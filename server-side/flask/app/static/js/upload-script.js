(function() {
  var calculateHeight;

  calculateHeight = function() {
    var $content, contentHeight, finalHeight, windowHeight;
    $content = $('#overlay-content');
    contentHeight = parseInt($content.height()) + parseInt($content.css('margin-top')) + parseInt($content.css('margin-bottom'));
    windowHeight = $(window).height();
    finalHeight = windowHeight > contentHeight ? windowHeight : contentHeight;
    return finalHeight;
  };

  $(document).ready(function() {
    var fileTarget = $('.file-box .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        }
        else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name').val(filename);
    });

    $(window).resize(function() {
      if ($(window).height() < 560 && $(window).width() > 600) {
        $('#overlay').addClass('short');
      } else {
        $('#overlay').removeClass('short');
      }
      return $('#overlay-background').height(calculateHeight());
    });
    $(window).trigger('resize');
    
    // open
    $('#popup-trigger').click(function() {
      return $('#overlay').addClass('open').find('.signup-form input:first').select();
    });
    
    // close
    return $('#overlay-background,#overlay-close').click(function() {
      return $('#overlay').removeClass('open');
    });



  });





}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLGVBQUEsR0FBa0IsUUFBQSxDQUFBLENBQUE7QUFFakIsUUFBQSxRQUFBLEVBQUEsYUFBQSxFQUFBLFdBQUEsRUFBQTtJQUFBLFFBQUEsR0FBVyxDQUFBLENBQUUsa0JBQUY7SUFDWCxhQUFBLEdBQWdCLFFBQUEsQ0FBUyxRQUFRLENBQUMsTUFBVCxDQUFBLENBQVQsQ0FBQSxHQUE4QixRQUFBLENBQVMsUUFBUSxDQUFDLEdBQVQsQ0FBYSxZQUFiLENBQVQsQ0FBOUIsR0FBcUUsUUFBQSxDQUFTLFFBQVEsQ0FBQyxHQUFULENBQWEsZUFBYixDQUFUO0lBQ3JGLFlBQUEsR0FBZSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFBO0lBRWYsV0FBQSxHQUFpQixZQUFBLEdBQWUsYUFBbEIsR0FBcUMsWUFBckMsR0FBdUQ7QUFFckUsV0FBTztFQVJVOztFQVVsQixDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUEsQ0FBQTtJQUVqQixDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsTUFBVixDQUFpQixRQUFBLENBQUEsQ0FBQTtNQUVoQixJQUFHLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQUEsQ0FBQSxHQUFxQixHQUFyQixJQUE2QixDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsS0FBVixDQUFBLENBQUEsR0FBb0IsR0FBcEQ7UUFDQyxDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsUUFBZCxDQUF1QixPQUF2QixFQUREO09BQUEsTUFBQTtRQUdDLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxXQUFkLENBQTBCLE9BQTFCLEVBSEQ7O2FBS0EsQ0FBQSxDQUFFLHFCQUFGLENBQXdCLENBQUMsTUFBekIsQ0FBZ0MsZUFBQSxDQUFBLENBQWhDO0lBUGdCLENBQWpCO0lBU0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0IsUUFBbEIsRUFUQTs7O0lBWUEsQ0FBQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsS0FBcEIsQ0FBMEIsUUFBQSxDQUFBLENBQUE7YUFDekIsQ0FBQSxDQUFFLFVBQUYsQ0FDQyxDQUFDLFFBREYsQ0FDVyxNQURYLENBRUMsQ0FBQyxJQUZGLENBRU8sMEJBRlAsQ0FFa0MsQ0FBQyxNQUZuQyxDQUFBO0lBRHlCLENBQTFCLEVBWkE7OztXQWtCQSxDQUFBLENBQUUsb0NBQUYsQ0FBdUMsQ0FBQyxLQUF4QyxDQUE4QyxRQUFBLENBQUEsQ0FBQTthQUM3QyxDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsV0FBZCxDQUEwQixNQUExQjtJQUQ2QyxDQUE5QztFQXBCaUIsQ0FBbEI7QUFWQSIsInNvdXJjZXNDb250ZW50IjpbImNhbGN1bGF0ZUhlaWdodCA9IC0+XG5cdFxuXHQkY29udGVudCA9ICQoJyNvdmVybGF5LWNvbnRlbnQnKVxuXHRjb250ZW50SGVpZ2h0ID0gcGFyc2VJbnQoJGNvbnRlbnQuaGVpZ2h0KCkpICsgcGFyc2VJbnQoJGNvbnRlbnQuY3NzKCdtYXJnaW4tdG9wJykpICsgcGFyc2VJbnQoJGNvbnRlbnQuY3NzKCdtYXJnaW4tYm90dG9tJykpXG5cdHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuXHRcblx0ZmluYWxIZWlnaHQgPSBpZiB3aW5kb3dIZWlnaHQgPiBjb250ZW50SGVpZ2h0IHRoZW4gd2luZG93SGVpZ2h0IGVsc2UgY29udGVudEhlaWdodFxuXHRcblx0cmV0dXJuIGZpbmFsSGVpZ2h0XG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cdFxuXHQkKHdpbmRvdykucmVzaXplIC0+XG5cdFx0XG5cdFx0aWYgJCh3aW5kb3cpLmhlaWdodCgpIDwgNTYwIGFuZCAkKHdpbmRvdykud2lkdGgoKSA+IDYwMFxuXHRcdFx0JCgnI292ZXJsYXknKS5hZGRDbGFzcyAnc2hvcnQnXG5cdFx0ZWxzZVxuXHRcdFx0JCgnI292ZXJsYXknKS5yZW1vdmVDbGFzcyAnc2hvcnQnXG5cdFx0XG5cdFx0JCgnI292ZXJsYXktYmFja2dyb3VuZCcpLmhlaWdodCBjYWxjdWxhdGVIZWlnaHQoKVxuXHRcblx0JCh3aW5kb3cpLnRyaWdnZXIgJ3Jlc2l6ZSdcblx0XG5cdCMgb3BlblxuXHQkKCcjcG9wdXAtdHJpZ2dlcicpLmNsaWNrIC0+XG5cdFx0JCgnI292ZXJsYXknKVxuXHRcdFx0LmFkZENsYXNzICdvcGVuJ1xuXHRcdFx0LmZpbmQoJy5zaWdudXAtZm9ybSBpbnB1dDpmaXJzdCcpLnNlbGVjdCgpXG5cdFxuXHQjIGNsb3NlXG5cdCQoJyNvdmVybGF5LWJhY2tncm91bmQsI292ZXJsYXktY2xvc2UnKS5jbGljayAtPlxuXHRcdCQoJyNvdmVybGF5JykucmVtb3ZlQ2xhc3MgJ29wZW4nIl19
//# sourceURL=coffeescript