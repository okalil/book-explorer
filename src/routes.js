import Home from './pages/Home';
import Search from './pages/Search';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title: 'Book Explorer - Encontre o livro que você procura aqui',
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    title: 'Busca de livro | Book Explorer',
  },
];
