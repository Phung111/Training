var masonry_column_list = document.querySelectorAll('.masonry-col');
var masonry_column_array = [...masonry_column_list];

let i = 1
let j = 1
let k = 1
let height_min = 0;
let height = 0;
let height_object = {};



const caculateColumnHieght = () => {
    for (var l = 1; l <= masonry_column_array.length; l++) {
        var col_check = document.querySelectorAll(`.masonry-item-${l}`);
        console.log(col_check);
        col_check.forEach(item => {
            height += item.clientHeight;
        });
        console.log('height : ', height);
        height_object['col_' + l] = height;
        height = 0
    }

    height_min = height_object['col_' + 1]
    k = 1
    for (var l = 2; l <= masonry_column_array.length; l++) {
        if (height_object['col_' + l] < height_min) {
            height_min = height_object['col_' + l]
            k = l
        }
    }

    console.log('k :', k);
    console.log('----------------------------------------');

}

const getMinHeightColumn = (object) => {

}

var numberItem = 10
var masonryRenderArray = []
let min = 0
let max = numberItem

// const getMasonryArray = () => {
//     console.log('min : ', min);
//     console.log('max : ', max);
//     masonryRenderArray = masonry.splice(min, max)
//     console.log('masonryRenderArray: ', masonryRenderArray);
// }



// const showMore = () => {
//     min += numberItem + 1
//     max += numberItem
//     getMasonryArray()
//     masonryRender()
// }

const masonryRender = () => {

    while (i <= masonry_column_array.length) {
        while (j <= masonry.length) {
            console.log('j : ', j);
            // console.log('pic_', j);
            // caculateColumnHieght()
            let column = i;
            // if (j <= masonry_column_array.length) {
            //     column = i
            // } else {
            //     column = k
            // }


            let masonry_item = `
                                    <div class="masonry-item masonry-item-${column} relative flex-middle hover">
                                        <a href="#" >
                                            <img src="${masonry[j].img}" class="br-16">
                                        </a>
                                        <div class="absolute z-10 text-white fs-20 fw-700 z-10">
                                            ${j}
                                        </div>
                                    </div>
                                 `
            $(`.masonry-col-${column}`).append(masonry_item)
            if (j == masonry.length) {
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
    // while (i <= masonry_column_array.length) {

    //     if (j > masonry_column_array.length) {


    //     }

    //     while (j <= masonry.length) {
    //         let column;
    //         if (j <= masonry_column_array.length) {
    //             column = i
    //         } else {
    //             column = k
    //         }


    //         let masonry_item = `
    //                                 <div class="masonry-item-${i} relative flex-middle">
    //                                     <a href="#">
    //                                         <img src="${masonry[j].img}">
    //                                     </a>
    //                                     <div class="absolute z-10 text-white fs-20 fw-700">
    //                                         ${j}
    //                                     </div>
    //                                 </div>
    //                              `
    //         $(`.masonry-col-${i}`).append(masonry_item)
    //         // if (j <= masonry_column_array.length) {
    //         //     $(`.masonry-col-${i}`).append(masonry_item)
    //         // } else {
    //         //     $(`.masonry-col-${k}`).append(masonry_item)
    //         // }

    //         // $(`.masonry-col-${i}`).append(j)
    //         if (j == all.length) {
    //             return
    //         }
    //         i = i + 1;
    //         j = j + 1;
    //         break
    //     }

    //     if (i == (masonry_column_array.length + 1)) {
    //         i = 1
    //     }

    // }

}

// getMasonryArray()
masonryRender()


// for (let i = 1; i <= masonry.length; i++) {
//     masonryRenderArray = [...masonry[max]]
//     console.log('masonryRenderArray : ', masonryRenderArray);
// }
