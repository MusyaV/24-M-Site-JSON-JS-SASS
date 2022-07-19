const DATA_URL = "./js/test.json";

window.addEventListener('load', () => {

    fetch(DATA_URL)
        .then(respone => respone.json())
        .then(result => {
            let headerHTML = `<header>
            <section class="sec1">
            <img src="img/logo3.png" alt="">
            <div class="topnav">`
            result.menuItems.forEach(element => {
                headerHTML += `<a class="active" href="#${element.ahref}">${element.ahref}</a>`;
            });

            headerHTML += `<div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search" name="search">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </section>
        <hr style="background-color: rgba(0, 0, 0, 0.205);">
        <section class="sec2">
            <h1> Mediumish</h1>
            Bootstrap theme, medium style, simply perfect for bloggers
        </section>
        <section class="sec3">
            <p>
                Featured
            </p>
            <hr style="background-color: rgba(0, 0, 0, 0.205);">
            <section class="grid">
            `;
            result.menuGrid.forEach(element => {
                headerHTML += `
                <div class="gr_1">
                <img class="image" src="img/${element.imgSrc}.jpg" alt="">
                <div class="text">
                    <a href="#"><strong>${element.aText}</strong> </a>

                    <p> This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</p>

                    <img class="lo_go"
                        src="img/depositphotos_266418694-stock-photo-portrait-of-handsome-adult-man.jpg" alt="">
                    <p class="t_t"> <strong style="color: rgba(0, 0, 0, 0.842);">${element.pName}</strong> <br>
                        22 July 20176 min read
                    </p>
                </div>
           </div>
                `;
            });
            headerHTML += `
            </section>
        </section>
        <section class="sec4">
            <p>All Stories</p>
            <hr style="background-color: rgba(0, 0, 0, 0.205);">
            <section class="grid">`

            result.menuGrid_1.forEach(element => {
                headerHTML += `
                <div class="gr_1">
                    <img class="image" src="img/${element.imgSrc}.jpg" alt="">
                    <div class="text">
                        <a href="#"><strong>${element.aText}</strong> </a>

                        <p> This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.</p>

                        <img class="lo_go"
                            src="img/depositphotos_266418694-stock-photo-portrait-of-handsome-adult-man.jpg" alt="">
                        <p class="t_t"> <strong style="color: rgba(0, 0, 0, 0.842);">${element.pName}</strong> <br>
                            22 July 20176 min read
                        </p>
                    </div>
                </div>`;
            });
            headerHTML += `
            </section>
            </section>

            </header>
            `;
            document.body.innerHTML = headerHTML;
        })
})


