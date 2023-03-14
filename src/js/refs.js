export const throttle = require('lodash.throttle');
export const STORAGE_KEY = 'feedback-form-state';
export const formRef = document.querySelector('.feedback-form');
export let formData = {};
export const dataInputs = localStorage.getItem(STORAGE_KEY);