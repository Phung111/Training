const masonryRender = () => {
    // let masonry_item = imgs.map(function (item) {
    //     return `
    //             <div class="masonry-item">
    //                 <a href="#">
    //                     <img src="${item.img}">
    //                 </a>
    //             </div>
    //             `
    // })

    var masonry_column_list = document.querySelectorAll('.masonry-col');
    var masonry_column_array = [...masonry_column_list];

    let i = 1
    let j = 1
    let k
    let height_min = 0;
    while (i <= masonry_column_array.length) {

        if (j > masonry_column_array.length) {
            for (var l = 1; l <= masonry_column_array.length; l++) {
                let col_check = document.querySelector(`.masonry-col-${l}`);
                let height = col_check.offsetHeight;
                if (height_min < height) {
                    height_min = height
                    k = l
                }
            }
            console.log('j :', j);
            console.log('k :', k);
            console.log('--------------------');

        }

        while (j <= masonry.length) {
            let masonry_item = `
                                    <div class="masonry-item relative flex-middle">
                                        <a href="#">
                                            <img src="${masonry[j].img}">
                                        </a>
                                        <div class="absolute z-10 text-white fs-20 fw-700">
                                            ${j}
                                        </div>
                                    </div>
                                 `
            $(`.masonry-col-${i}`).append(masonry_item)
            // if (j <= masonry_column_array.length) {
            //     $(`.masonry-col-${i}`).append(masonry_item)
            // } else {
            //     $(`.masonry-col-${k}`).append(masonry_item)
            // }

            // $(`.masonry-col-${i}`).append(j)
            if (j == all.length) {
                return
            }
            i = i + 1;
            j = j + 1;
            break
        }

        if (i == (masonry_column_array.length + 1)) {
            i = 1
        }

    }
}

masonryRender()
