$(document).ready(function () {
    const div = $("<div></div>");
    div.appendTo("body");

    const unorderedList = $("<ul></ul>");
    unorderedList.appendTo("body");

    const textField = $("#textSubmit");
    const submitBtnClicked = $("#btnSubmit").click(function () {
        alert(textField.val());
        const listItem = $("<li>" + textField.val() + "</li>");
        listItem.click(function () {
            const setColor = Math.floor(Math.random()*16777215).toString(16);
            $(this).css('color', '#'+setColor)
        });
        listItem.appendTo(unorderedList);

        listItem.dblclick(() => {
            listItem.remove();
        });

        listItem.hover(() => {
           listItem.css('cursor', 'pointer');
        });

    });
    submitBtnClicked.prop('disabled', true);

    textField.keyup(function () {
        if($(this).val !== '') {
            submitBtnClicked.prop('disabled', false);
        }
    });

});