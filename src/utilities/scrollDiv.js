
export default function scrollDiv() {
    const stickySections = [...document.querySelectorAll(".sticky-content")];
    console.log('done');

    window.addEventListener('scroll', (event) => {
        for (let index = 0; index < stickySections.length; index++) {
            transform(stickySections[index]);
        }
    });

    function transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector(".scroll-selection");
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }
}

// HTML:

/*
    <div class='sticky-parent'>
        <div className='sticky-content'>
            <div className='scroll-section'>
                ...
            </div>
        </div>
    </div>
*/

// CSS:

/*
    .sticky-parent {
        height: 500vh;
    }

    .sticky-content {
        overflow: hidden;
        position: sticky;
        top: 0;
        height: 100vh;
        border: 1px solid red;
    }

    .scroll-section {
        position: absolute;
        top: 0;
        height: 100%;
        width: 500vw;
        will-change: transform;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /!* padding: 0 5vw *!/
    }
*/
