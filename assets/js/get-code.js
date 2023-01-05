let form = document.getElementById('getCodeForm')
let outputCode = document.getElementById('outputCode')

form.addEventListener('submit', async function (e) {
  let cssCollection = [], minifiedCSS
  e.preventDefault();
  let props = await getFormData(e.target);
  for (item of props) {
    cssCollection.push(await fetchData(item))
  }
  minifiedCSS = minifyCSS(cssCollection.toString())
  outputCode.textContent = minifiedCSS
})


function getFormData(form) {
  var formData = new FormData(form);
  let formProp = [];

  for (let [k, v] of formData.entries()) {
    formProp.push(v)
  }
  return formProp;
}


function fetchData(component) {
  let url = `/dist/css/components/${component}.css`;
  return new Promise(async function (resolve, reject) {
    // do async thing
    const res = await fetch(url)
    // resolve
    res.status === 200 ? resolve(res.text()) : resolve(`\n\n/* ${component} not found! */\n\n`)
  })
}


function minifyCSS(css) {
  let url = 'https://www.toptal.com/developers/cssminifier/api/raw'

  // return new Promise(async function (resolve, reject) {
  // do async thing
  // const res = await fetch(url, {
  //   method: 'post',
  //   credentials: 'same-origin',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify({ input: css })
  // })
  // // resolve
  // if (res.status === 200) {
  //   resolve(res.text())
  // }
  // })
  return css;
}