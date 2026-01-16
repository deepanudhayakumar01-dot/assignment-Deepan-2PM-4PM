(function (startMessage) {

    console.log(startMessage);

    const app = {
        name: "Deepan ",
        init: function () {
            console.log(this.name + " Welcom to your Portal");
        }
    };

    app.init();

})("Initializing Application..."); 
