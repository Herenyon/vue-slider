const { createApp } = Vue;
let index = 0; console.log(index);
createApp({
    data() {

        return {
            index: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]

        }

    },

    methods: {

        nextClick() {

            this.index++;
            
            if (this.index > this.slides.length - 1) {
                this.index = 0;
               console.log(this.index); 
            }
        },


        prevClick() {
            this.index--;
            
            if (this.index < 0) {
                this.index = this.slides.length - 1;
               console.log(this.index); 
            }
        },

        thumbSp(){
            this.index = 0;
        },
        thumbRC(){
            this.index = 1;
        },
        thumbFo(){
            this.index = 2;

        },
        thumbStr(){
            this.index = 3;
        },
        thumbAve(){
            this.index = 4;
        },

        
    },
//    mounted() {
//         setInterval(() => {
//             this.index = index++;
//             if (this.index > this.slides.length - 1) {
//                 this.index = 0;
                
//             }
//             console.log(this.index);
//         }, 3000);
//     },
}).mount('#app');



// console.log(slides);