// const images = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ];

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ];

Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            slides: [
                {
                    image:'img/01.jpg',
                    title:'Svezia',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image:'img/02.jpg',
                    title:'Svizzera',
                    text:'Lorem ipsum'
                },
                {
                    image:'img/03.jpg',
                    title:'Gran Bretagna',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image:'img/04.jpg',
                    title:'Germania',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    image:'img/05.jpg',
                    title:'Paradise',
                    text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }                
            ],
            currentSlide: 0                                
        },

        methods: {
            // Slide precedente
            prevSlide(){
                this.currentSlide --; // precedente

                // se sono alla prima, mi posiziono sull'ultima
                if(this.currentSlide < 0){
                    this.currentSlide = this.slides.length - 1; // ultima
                }
            },
            // Slide successiva
            nextSlide(){
                this.currentSlide ++; // successiva

                // se sono all'ultima, mi posiziono sulla prima
                if(this.currentSlide > this.slides.length - 1){
                    this.currentSlide = 0;
                }
            },
            changeImg(index){
                this.currentSlide = index;
            }
        },
    }
)