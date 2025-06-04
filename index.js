"use strict"

marked.setOptions({breaks: true})
let editor = document.querySelector('#editor')
editor.addEventListener('input', parseMarkup)
let preview = document.querySelector('#preview')

function parseMarkup() {
   preview.innerHTML = marked(editor.value)
}

parseMarkup()
