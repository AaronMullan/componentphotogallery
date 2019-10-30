import Component from '../Component.js';
import ImageItem from '../data/images.js';

class ImageList extends Component{

    renderHTML() {
        return`
        <ul class ="images"></ul>
    `;
    }

    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image};
            const imageItem = new ImageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;