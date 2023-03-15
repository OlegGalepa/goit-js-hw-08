import throttle from 'lodash.throttle';
import {
STORAGE_KEY, formRef, dataInputs
} from './refs';
let formData = {};

formRef.addEventListener('submit', onSubmitForm);
formRef.addEventListener('input', throttle(onFormInput, 500)); 

if (dataInputs) {
    formData = JSON.parse(dataInputs);
    for (const key of Object.keys(formData)) {
        formRef.elements[key].value = formData[key];
    }
}

export function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    formData = {}
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
