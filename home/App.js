import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
// import FilteredImages from './FilteredImages.js';

class App extends Component{
    onRender(dom){
        const header = new Header
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);
    
    };


    
    renderHTML(){
        return`
        <div>
            <main>
                <section class="images">
                </section>
            </main>
            </div>
        `;

        const filterImages = new FilterImages({
            image: images,
            onFilter: (imageType) => {
                let filteredImages;
                if (!imageType) {
                    filteredImages = images;
                } else {
                    filteredImages = images.filter(image => {
                        return image.type === imageType;
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
    }
    
export default App;