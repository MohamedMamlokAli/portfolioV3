import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ProjectComponent,
    DropdownComponent,
    ProjectPageComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, MatIconModule],
})
export class ProjectsModule {}
