import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import FilterImages from './FilterImages.js';
import images from '../data/images.js';



class App extends Component {

    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
    

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const filterImages = new FilterImages({
            image: images,
            onFilter: (imageKeyword) => {
                let filteredImages;
                if (!imageKeyword) {
                    filteredImages = images;
                } else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageKeyword;
                    });
                }

                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }

        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);


    }

    renderHTML() {

        return `

            <div>
                <!-- Header goes here -->

                <main>
                    <section class="options-section">
                        <!-- FilterImages goes here -->
                    </section>
                    <section class="list-section">
                        <!-- ImageList goes here -->
                    </section>
                </main>

                <footer>
                </footer>

            </div>


        `;
    }

}

export default App;