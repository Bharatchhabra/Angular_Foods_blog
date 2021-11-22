import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlogComponent } from './component/blogs/blog/blog.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PrivacyPolicyComponent } from './component/footer-content/privacy-policy/privacy-policy.component';
import { UserAdminComponent } from './component/footer-content/user-admin/user-admin.component';
import { FeedbackComponent } from './component/footer-content/feedback/feedback.component';
import { FAQaComponent } from './component/footer-content/faqa/faqa.component';
import { TurmConditionComponent } from './component/footer-content/turm-condition/turm-condition.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogEditComponent } from './component/blogs/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    CategoriesComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivacyPolicyComponent,
    UserAdminComponent,
    FeedbackComponent,
    FAQaComponent,
    TurmConditionComponent,
    SingleBlogComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
