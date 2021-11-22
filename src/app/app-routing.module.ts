import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogEditComponent } from './component/blogs/blog-edit/blog-edit.component';
import { BlogComponent } from './component/blogs/blog/blog.component';
import { SingleBlogComponent } from './component/blogs/single-blog/single-blog.component';

import { CategoriesComponent } from './component/categories/categories.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FAQaComponent } from './component/footer-content/faqa/faqa.component';
import { FeedbackComponent } from './component/footer-content/feedback/feedback.component';
import { PrivacyPolicyComponent } from './component/footer-content/privacy-policy/privacy-policy.component';
import { TurmConditionComponent } from './component/footer-content/turm-condition/turm-condition.component';
import { UserAdminComponent } from './component/footer-content/user-admin/user-admin.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'Blog-edit', component:BlogEditComponent},
  {path:'Blog',children:[
    {path:'',component:BlogComponent},
    {path:'single-blog',component:SingleBlogComponent},
    
  ]},

  {path:'About-Us',component:AboutUsComponent},
  {path:'Contact-Us',component:ContactUsComponent},
  {path:'Categories',component:CategoriesComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'',children:[
    {path:'', component:FooterComponent},
    {path:'privacy-policy', component:PrivacyPolicyComponent},
    {path:'User-admin', component:UserAdminComponent},
    {path:'feedback', component:FeedbackComponent},
    {path:'FAQa', component:FAQaComponent},
    {path:'Turm-Condition',component:TurmConditionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
