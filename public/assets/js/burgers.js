$(function () {
    $(".change-devoured").on("click", function (event) {
        event.preventDefault()

        let id = $(this).data("id")
        let devouredState = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function (result) {
            console.log("Burger devoured", result)
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault()

        let newBurger = {
            name: $("#new-burger").val().trim()
        }


        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger!")
            location.reload()
        })
    });
});