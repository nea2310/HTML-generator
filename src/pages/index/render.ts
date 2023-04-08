import Controller from '../../components/controller/Controller';

const pageIndex = document.querySelector('.js-index');
if (pageIndex) pageIndex.querySelectorAll('.js-controller').forEach((item) => new Controller(item));
