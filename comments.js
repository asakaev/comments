var str, el, placeToForm;

function loadJSON() {
    $.getJSON('/comments/getcomments', function (data) {
        console.log(data);
        var postCount = 1;
        $.each(data, function (key, val) {
            var insertTo = $(".container");
            showRecursive(val, insertTo, postCount++, 0);
        });
    });
}

function showRecursive(data, place, num, reclvl) {
    // posts and comments different selectors
    // if post
    if (data.self.parent == 0) {
        str = '<div class="media">';
        str += '<a class="pull-left" href="#"><img class="media-object" src="/comments/post.png" alt="Media Object"></a>';
        str += '<div class="post media-body" id="' + num + '">';
        str += '<h4 class="media-heading">' + data.self.title + '</h4>' + data.self.post;
        str += ' <button type="button" class="btn btn-info btn-xs" id="btn' + data.self.id + '"' + '>Reply</button>';
        str += '</div></div>';
        el = $(str);
        place.append(el);

        // to append comments under post with left padding
        var numStr = '"#' + num + '"';
        place = $(".media .media-body").filter(".post").filter(numStr);
    } else {
        // if comment
        var recStr = ' class="comment media-body lvl' + reclvl + '"';
        var idStr = ' id="' + num + '"';
        str = '<div class="media">';
        str += '<a class="pull-left" href="#"><img class="media-object" src="/comments/comment.png" alt="Media Object"></a>';
        str += '<div' + recStr + idStr + '><h4 class="media-heading">';
        str += data.self.name + ' (' + data.self.email + ')</h4>';
        str += data.self.message;
        str += ' <button type="button" class="btn btn-info btn-xs" id="btn' + data.self.id + '"' + '>Reply</button>';
        str += '</div>';
        el = $(str);
        place.append(el);
        place = el;
    }

    // button handle
    $('#btn' + data.self.id).click(function () {
        var form = '<form class="form-inline" role="form" id="repForm">';
        form += '<div class="form-group">';
        form += '<label class="sr-only" for="name">name</label>';
        form += '<input type="text" class="form-control" id="text" placeholder="name"></div>';
        form += '<div class="form-group">';
        form += '<label class="sr-only" for="email">email</label>';
        form += '<input type="email" class="form-control" id="email" placeholder="email"></div>';
        form += '<input type="text" class="form-control" placeholder="comment">';
        form += '<button type="submit" class="btn btn-default"">Reply</button></form>';

        console.log($('#btn' + data.self.id));

        $('#btn' + data.self.id).parent().parent().html(form);


        $("#repForm").submit(function(e) {
            console.log($(this));
//            var thisForm = $( this );
//            console.log($(this).serializeArray());

            var postData = $(this).serializeArray();
            var formURL = $(this).attr("action");
            $.ajax(
                {
                    url : formURL,
                    type: "POST",
                    data : postData + '&test=' + '55',
                    success:function(data, textStatus, jqXHR)
                    {
                        //data: return data from server
                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        //if fails
                    }
                });
//            e.preventDefault(); //STOP default action
//            e.unbind(); //unbind. to stop multiple form submit.


//            var form = $( this ),
//                url = form.attr( 'action' );
//            var posting = $.post( url, { srEmail: ("#srEmail").val() } );
//            posting.done(function( data ) {
//                $("#results").append( html );
            });
    });


    // if no childs
    if (data.childs.length == 0) {
        return;
    } else {
        var commentsCount = 1;
        $.each(data.childs, function (key, val) {
            showRecursive(val, place, commentsCount++, reclvl + 1);
        });
    }
}