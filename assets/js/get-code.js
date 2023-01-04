let form = document.getElementById('getCodeForm')

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let props = await getData(e.target);
  let css = await generateCSS(props)
  console.log(css);
})

// async function generateCSS(e) {
//   e.preventDefault();
//   let props = await getData(e.target);
//   let css = await generateCSS(props)
// }


function getData(form) {
  var formData = new FormData(form);
  let formProp = [];

  for (let [k, v] of formData.entries()) {
    formProp.push(v)
  }
  return formProp;
}


function fetchData(component) {
  let URI = `/dist/css/components/${component}.css`;
  return new Promise((resolve, reject) => (
    fetch(URI)
      .then(data => data.text())
      .then(data => resolve(data))
      .catch(err => reject(err))
  ))
}

function generateCSS(props) {
  // let csss = getCssFromFetch('image-box')
  // console.log(props);
  // return props
  let css = []
  props.map(item => {
    css.push(getCssFromFetch(item))
  })
  return css;
}
// generateCSS()

// function minifyCSS(css) {

// }