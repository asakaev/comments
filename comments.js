var str, el;

function loadJSON() {
    $.getJSON('getcomments', function (data) {
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
        str += '<a class="pull-left" href="#"><img class="media-object" src="post.png" alt="Media Object"></a>';
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
        str += '<a class="pull-left" href="#"><img class="media-object" src="comment.png" alt="Media Object"></a>';
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
        $('#btn' + data.self.id).parent().parent().html('test');
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