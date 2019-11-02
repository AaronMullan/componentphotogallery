import Component from '../Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
            <select class="image-type-filter">
                <option value="" selected>All Types</option>
                <option value="rhino">Rhino</option>
                <option value="narwhal">Narwhal</option>
                <option value="unicorn">Unicorn</option>
                <option value="markhor">Markhor</option>
            </select>
        `;
    }
}

export default FilterImages;