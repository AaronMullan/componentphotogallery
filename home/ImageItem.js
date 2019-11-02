import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li class="image-item">
                <div class="info-container">
                    <h2>${image.title}</h2>
                    <p class="image-type">${image.description}</p>
                </div>
                <div class="image-container">
                    <img src="${image.url}" alt="${image.name}">
                </div>
                <p class="horn-count">Horns: ${image.horns}</p>
            </li>
        `;
    }
}

export default ImageItem;