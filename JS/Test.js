

$("#add-button").on("click", function (e) {
    console.log("Button Clicked");
    e.preventDefault();

    // $.ajax({
    //     url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAolKm9u-AaA00Is794WFRDID191rWHPcQ&callback=initMap",
    //     method: "GET"
    // }).then(function (res) {
    //     console.log(res);
    // });
});
    



// $(document).ready(function () {
//     eventDispatch.wireEvents();
// });   

// var display = {
//     render() {
//         console.log(appState.ajaxResponse);
//         var testDiv = $("<div id='test'>");
//         $(".container").append(testDiv);
//         $("#test").text("Test");
//     }
// }