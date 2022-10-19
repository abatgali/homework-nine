var MODEL = (function () {

    var _homeContent = `
                        <header>
                        
                        </header>
                        <section id="content">
                         <h1><u>Plant more Trees</u></h1>
                            <img src="images/AdobeStock_113904479.jpeg" width="300px" height="auto">
                            <p style="float: right;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat in. Dignissim cras tincidunt lobortis feugiat vivamus. Adipiscing at in tellus integer feugiat scelerisque varius. Dui id ornare arcu odio ut sem nulla. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Neque aliquam vestibulum morbi blandit cursus risus at. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Pellentesque sit amet porttitor eget dolor morbi non. Urna condimentum mattis pellentesque id. Gravida in fermentum et sollicitudin ac. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sagittis orci a scelerisque purus semper eget duis at. Vivamus at augue eget arcu dictum varius duis at. Sodales ut etiam sit amet nisl purus in.</p>
                            <p>Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Aenean pharetra magna ac placerat vestibulum lectus mauris. Auctor eu augue ut lectus arcu. Mauris vitae ultricies leo integer malesuada. Ut eu sem integer vitae justo eget magna fermentum. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Arcu dui vivamus arcu felis bibendum ut tristique. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Aliquam etiam erat velit scelerisque. Odio facilisis mauris sit amet massa vitae. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Dolor morbi non arcu risus quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ullamcorper a lacus vestibulum sed arcu.</p>
                            <p>Urna nunc id cursus metus aliquam eleifend mi in nulla. Pellentesque habitant morbi tristique senectus et netus et. Urna duis convallis convallis tellus id interdum velit laoreet. Bibendum at varius vel pharetra vel turpis. Netus et malesuada fames ac. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Lorem mollis aliquam ut porttitor leo a diam. At in tellus integer feugiat scelerisque varius morbi. Ac turpis egestas sed tempus urna et. Non nisi est sit amet facilisis magna etiam tempor orci. Duis at tellus at urna. Morbi quis commodo odio aenean sed adipiscing diam. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Pharetra massa massa ultricies mi quis. Fringilla urna porttitor rhoncus dolor purus non. Dolor sed viverra ipsum nunc. Nec nam aliquam sem et.</p>
                        </section>`;

    var _aboutContent = `<section id="content">
                            <div id="mission_pic"></div>

                            <h1><u>OUR MISSION</u></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </section>`;
    var _productsContent = `<section id="content">
                                <div id="trees">
                                    <div class="pic" id="one"></div>
                                    <div class="pic" id="two"></div>
                                    <div class="pic" id="three"></div>
                                    <div class="pic" id="four"></div>
                                    <div class="pic" id="five"></div>
                                    <div class="pic" id="six"></div>

                                </div>
                            </section>
                            `;

    var _contactContent = ` <section id="content">
    <h1>Volunteer</h1><hr><p>123 Baker Street<br>Masonopolis<br>ZH 456780<Br><br><tel>9310-979-300</tel></p>
        <form>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Phone Number">
            <input type="number" placeholder="Age">
            <input type="text" placeholder="Job interested">
            <input type="submit">
        </form>
    </section>

    `;

    var _updateView = function(pageName) {
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    }

    return {
        updateView: _updateView,

    }
})();