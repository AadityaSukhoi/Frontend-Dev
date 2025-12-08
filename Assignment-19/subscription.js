$(document).ready(function () {
  function showMessage(text) {
    $('#msgBox').text(text).fadeIn(150).delay(1200).fadeOut(400);
  }

  $('#topicList').on('click', '.subscribe', function () {
    const item = $(this).closest('.topic');
    item.addClass('subscribed');
    showMessage('Subscribed to ' + item.data('topic'));
  });

  $('#topicList').on('click', '.unsubscribe', function () {
    const item = $(this).closest('.topic');
    item.removeClass('subscribed');
    showMessage('Unsubscribed from ' + item.data('topic'));
  });

  $('#topicList').on('click', '.remove', function () {
    const item = $(this).closest('.topic');
    const name = item.data('topic');
    item.slideUp(200, function () { $(this).remove(); });
    showMessage('Removed topic ' + name);
  });

  $('#addTopic').on('click', function () {
    const name = $('#newTopic').val().trim();
    if (!name) {
      showMessage('Enter a topic name');
      return;
    }
    const safeKey = name.replace(/\s+/g, '-');
    const newItem = $(
      '<li class="topic" data-topic="' + safeKey + '">' +
        '<span class="label">' + name + '</span>' +
        '<div>' +
          '<button class="subscribe">Subscribe</button>' +
          '<button class="unsubscribe">Unsubscribe</button>' +
          '<button class="remove">Remove</button>' +
        '</div>' +
      '</li>'
    );
    $('#topicList').append(newItem);
    $('#newTopic').val('');
    showMessage('Added topic ' + name);
  });

  $('#detachSubscribe').on('click', function () {
    $('#topicList').off('click', '.subscribe');
    showMessage('Subscribe handler detached');
  });
});