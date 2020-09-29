import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'movie/:id', component: MovieDetailsComponent,canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  { path: 'movie', component: MoviesComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
