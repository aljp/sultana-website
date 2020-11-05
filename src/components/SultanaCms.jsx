import React, { useState, useLayoutEffect } from 'react'


const SultanaCms = ({ children }) => {
  const [pageValues, setPageValues] = useState({});
  const [editableNodes, setEditableNodes] = useState({});

  const createInputElement = (editNode) => {
    const computedStyles = window.getComputedStyle(editNode)
    const inputKey = editNode.dataset.sultanaEditableId
    const inputElement = document.createElement('textarea')

    inputElement.value = editNode.innerText
    Array.from(computedStyles).forEach((property) => inputElement.style.setProperty(property, computedStyles[property]))
    inputElement.style.setProperty('border', '1px solid red')
    inputElement.onkeyup = (event) => { handleOnChange(inputKey, event.target.value) }

    return inputElement;
  }

  const createEditButton = () => {
    const button = document.createElement('button')
    button.textContent = 'edit'
    button.classList.add('btn', 'SultanaCms-button')
    button.onclick = handleEditClick

    return button;
  }

  const createSaveButton = (editNode, inputElement) => {
    const inputKey = editNode.dataset.sultanaEditableId

    const button = document.createElement('button')
    button.classList.add('btn', 'SultanaCms-button')
    button.textContent = 'Save'
    button.onclick = (event) => { handleSave(event, inputKey, inputElement) }

    return button;
  }

  const handleOnChange = (key, value) => {
    const newValue = Object.assign(pageValues, { [key]: value })
    setPageValues(newValue)
  }
  
  const handleSave = (event, inputKey, editInput) => {
    const oldNode = editableNodes[inputKey]
    oldNode.innerText = pageValues[inputKey]
    
    const editButton = createEditButton()

    event.target.replaceWith(editButton)
    editInput.replaceWith(oldNode)
  }

  const handleEditClick = (e) => {
    const editNode = e.target.parentElement.children[0]
    const inputElement = createInputElement(editNode)
    const saveButton = createSaveButton(editNode, inputElement)

    const newEditableNodes = Object.assign(editableNodes, { [editNode.dataset.sultanaEditableId]: editNode })
    setEditableNodes(newEditableNodes)
    e.target.replaceWith(saveButton)
    editNode.replaceWith(inputElement)
  }
  
  useLayoutEffect(() => {
    if (document) {
      const nodes = [...document.querySelectorAll('[data-sultana-editable-id]')]

      nodes.forEach((node) => {
        const wrap = document.createElement('div')
        wrap.classList.add('SultanaCms-wrap')
        wrap.appendChild(node.cloneNode(true))

        wrap.appendChild(createEditButton())
        node.replaceWith(wrap)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
    </>
  );
};

export default SultanaCms;