LAB 02: Component Photo Gallery
===

Create a photo gallery app. Reuse your design (html and css) from yesterday, but create a new repo and place html and css as appropriate.

## Utility Helpers

Today's lab includes starter code which should be copied to your lab. **Copy the contents, not the `starter-code` folder itself**. It includes the `htmlEqual` and `htmlToDom` utility functions. `htmlEqual` is already imported in `/test/tests.js`. It also includes `Component.js` base component file.

## Image Data

Use the supplied images data file at `data/images.js`

## Component Tree

- `App`
    - `Header`
    - `FilterImages`
    - `ImageList`
        - [`ImageItem`]

## 1. Build Out Basic App Structure

- `index.html`
- `/data/images.js`
- `/home/index.js` - creates App and appends to DOM
- `/home/App.js` - top level component
- `/home/Header.js` - header component
- `/home/ImageList.js` - image list component

Build out basic tree of app, starting at top and working down. The `App` component should introduce the image list data, passing as a prop to `ImageList`. 

Initially, `ImageList` component can just show count of images so you know it is receiving the data via props.

**Time to git ACP!**

## 2. DDD `ImageItem` Component

- `/home/ImageItem.js`
- `/test/ImageItem.test.js`

Here is where you would build out static example of individual items. Since you did that yesterday, use that to build out the `renderHTML` method of the `ImageItem` component.

**Time to git ACP!**

## 3. Create `ImageItem` Children in `ImageList`

- `/home/ImageList.js`

In the `onRender` method of `ImageList`, create an `ImageItem` component instance "for each" image in the images data, and append to the `<ul>`. This is similar to the logic in yesterday's `app.js`

**Time to git ACP!**

## 4. Filter Images

- `/src/FilterImages.js`
- `/src/App.js`

1. Return the html for the filter from yesterday's lab in the `renderHTML` method of the component.
1. Import the  `FilterImages` component into `App` and in `onRender`, add it to the appropriate spot.
1. You will need to pass the callback prop `onFilter` to `FilterImages`
1. In your callback, you will need to filter the images array and call `.update` on the `ImageList` component with the filtered array.

**Time to git ACP!**

## STRETCH: Add More Filters

In your `FilterImages`, you can add other filters. For example, Number of Horns which is minimum number of horns. You will need to change your call to `onFilter` to be an object, where each property is a filter:

```js
const filter = {
    keywords: 'chameleon',
    horns: 3
};
```

Keep in mind, the user may supply some, none, or all filters. Make sure you can detect when a filter is not being used.

In `App`, you can apply the various parts of the filter to each image.

**Time to git ACP!**

## STRETCH: Derive Keywords from Data

Change `FilterImages` to also take a list of images as a prop. In `renderHTML`, derive unique keywords from the data and use that to create the `select` `options` using a `.map` operation on the unique list of keywords.

**Time to git ACP!**

## SUPER STRETCH: Add Image

- `/src/App.js`
- `/src/AddImage.js`

1. Create a new `AddImage` component that has a form with data need to create an image.
1. It will expect to be passed an `onAdd` callback function as a prop. In the `onRender` method, subscribe to the form submit event and in the event listener bundle up the data into an object and pass that to the `onAdd` callback function.
1. `App` will need to pass `AddImage` a callback as the `onAdd` prop. This should be _an arrow function_ that:
    1. Adds the passed new image to the images data.
    1. Calls the `update` method of `ImageList` passing in new props that has the updated
    image data.
    1. You will need to (maybe) deal with the filter. Perhaps it should clear when an image is added?

**Time to git ACP!**

---

## Points Break Down

Looking For | Points (10)
:--|--:
`App` and `Header` components | 2
`ImageList` component | 2
`ImageItem` component and test | 3
`FilterImages` and working filter | 3
More filters | +1 each
Derive keyword from data | +2
`AddImage` | +3