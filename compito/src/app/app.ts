import { Component } from '@angular/core';
import { Componente1 } from './componente1/componente1';
import { Post } from './post/post';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-root',
imports: [Componente1, Post, CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
messaggio = 'Ciao dal componente padre!';

posts = [
{
titolo: 'titolo1',
testo: 'esempio di testo1'
},
{
titolo: 'titolo1',
testo: 'esempio di testo2'
},
{
titolo: 'titolo3',
testo: 'esempio di testo3'
}
];
get postsVisibili() {
  return this.posts.filter(p => p.testo.length <= 20);
}
}